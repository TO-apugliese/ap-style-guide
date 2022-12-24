import {Component, HostListener, Injector}                   from '@angular/core';
import {BaseContentTypes, ContentService, NavigationService} from '../service';
import {Image, Media}                                        from '../models';
import {BasePages}                                           from '../pages/base-pages';
import {AppInjector}                                         from './app.injector';
import {waitFor}                                             from './util';
import {ApplicationConfig, applicationConfigToken}           from './application-config';

interface KeyState {
    key: string;
    pressed: boolean;
}

@Component({template: ''})
export abstract class BaseComponent<Pages, ContentTypes> {
    _pageTitle!: string;
    isInit          = false;
    protected injector!: Injector;
    contentSrv!: ContentService<ContentTypes, Pages>;
    navigationSrv!: NavigationService<Pages>;
    applicationConfig!: ApplicationConfig<Pages>;
    medias: Media[] = [];

    openCmsKeyState: {key: string, pressed: boolean}[] = [];

    protected constructor() {
        this.initInjector();

        waitFor(() => !!this.contentSrv).then(() => {
            this.contentSrv.getContent(BaseContentTypes.TRANSLATION).then(() => {
                this.isInit = true;
            });

            this.contentSrv.getContent(BaseContentTypes.MEDIA).then((medias) => {
                this.medias = medias;
            });
        });

        waitFor(() => !!this.applicationConfig).then(() => {
            this.openCmsKeyState = this.applicationConfig?.cmsConfig?.openKeyCombination.map(key => ({key, pressed: false}));
            this.setTitle();
        });
    }

    set pageTitle(value: Pages | BasePages) {
        const valueAsString = value as unknown as string;
        this._pageTitle     = `${valueAsString.charAt(0).toUpperCase()}${valueAsString.slice(1)}`;
    }

    get pageTitle(): Pages | BasePages {
        return this._pageTitle as unknown as Pages;
    }

    private async initInjector(): Promise<void> {
        await waitFor(() => !!AppInjector.getInjector());

        this.injector          = AppInjector.getInjector();
        this.contentSrv        = this.injector.get<ContentService<ContentTypes, Pages>>(ContentService);
        this.navigationSrv     = this.injector.get<NavigationService<Pages>>(NavigationService);
        this.applicationConfig = this.injector.get<ApplicationConfig<Pages>>(applicationConfigToken);
    }


    translate(key: string): string {
        if (!this.contentSrv) return '';

        const trans = this.contentSrv.contents.get(BaseContentTypes.TRANSLATION);
        if (!trans) return '';

        const translations: any = trans
            .reduce((prev: {key: string, value: string}, cur: {key: string, value: string}) => ({...prev, [cur.key]: cur.value}), {});

        return translations[key] ? translations[key] : '';
    }

    image(name: string): Image {
        const img = this.medias.find(m => m.name === name);
        if (!img) return {} as Image;

        return img.media;
    }

    private setTitle(): void {
        const titleTag = window.document.querySelector('head title');

        if (titleTag && this.pageTitle) titleTag.innerHTML = `${this.applicationConfig?.title} - ${this.pageTitle}`;
    }

    get currentPageUrl(): string {
        return `/${this.navigationSrv.currentPage}`;
    }

    @HostListener('window:keydown', ['$event'])
    keyDownEvent(event: KeyboardEvent): void {
        if (this.openCMS) return;

        this.setKeyState(event.key, true);

        if (this.openCMS) {
            window.open(`https://app.contentful.com/spaces/${this.applicationConfig?.cmsConfig?.space}/home`);
            this.openCmsKeyState.forEach(keySate => keySate.pressed = false);
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyUpEvent(event: KeyboardEvent): void {
        this.setKeyState(event.key, false);
    }

    setKeyState(key: string, isPressed: boolean) {
        const keyState = this.openCmsKeyState.find((keyState) => keyState.key === key);

        if (!!keyState) keyState.pressed = isPressed;
    }

    get openCMS(): boolean {
        return this.openCmsKeyState.every(keyState => keyState.pressed);
    }
}
