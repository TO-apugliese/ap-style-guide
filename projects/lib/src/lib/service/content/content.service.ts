import {ApplicationRef, Inject, Injectable}                                   from '@angular/core';
import {ContentfulClientApi, createClient, EntryCollection, LocaleCollection} from 'contentful';
import {ApplicationConfig, applicationConfigToken}                            from '../../shared';
import {BaseContentTypes}                                                     from './base-content-types';

export enum Locals {
    EN = 'en-US',
    DE = 'de',
}

@Injectable()
export class ContentService<ContentTypes, Pages> {
    client!: ContentfulClientApi;
    private _locals!: string[];
    private _selectedLocal!: string;
    contents: Map<ContentTypes | BaseContentTypes, any[] | undefined> = new Map<ContentTypes, any[] | undefined>();

    constructor(
        private ref: ApplicationRef,
        @Inject(applicationConfigToken) private config: ApplicationConfig<Pages>,
    ) {
        this.client = createClient({
            space:       config.cmsConfig.space as string,
            accessToken: config.cmsConfig.accessToken as string,
        });

        this.client.getLocales().then((res: LocaleCollection) => {
            this._locals       = res.items.map((i: any) => i.code);
            const defaultLang  = res.items.find((i: any) => i.default);
            this.selectedLocal = !!defaultLang ? defaultLang.code : res.items[0].code;
        });
    }

    async getContent(type: ContentTypes | BaseContentTypes): Promise<any[]> {
        const content = this.contents.get(type);
        if (Array.isArray(content)) return content;

        const entries: EntryCollection<any> = await this.client.getEntries({
            content_type: type,
            locale:       this._selectedLocal,
        });

        const data = entries.items.map((i: any) => i.fields);
        this.contents.set(type, data);

        return data;
    }

    get locales(): string[] {
        return this._locals;
    }

    set selectedLocal(local: string) {
        this._selectedLocal = local;
        this.resetContents();
    }

    resetContents(): void {
        this.contents.clear();
    }
}

export * from './base-content-types';