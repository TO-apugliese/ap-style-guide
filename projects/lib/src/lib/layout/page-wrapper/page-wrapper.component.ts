import {Component, Input, OnInit} from '@angular/core';
import {Image}                    from '../../models';
import {BaseComponent, waitFor}   from '../../shared';
import {BaseContentTypes}         from '../../service';

@Component({
    selector:    'ap-page-wrapper',
    templateUrl: './page-wrapper.component.html',
    styleUrls:   ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent extends BaseComponent<any, any> implements OnInit {
    @Input() images!: Image[];

    backgroundImages!: any[];

    constructor() {super();}

    async ngOnInit(): Promise<void> {
        await waitFor(() => !!this.contentSrv);

        this.backgroundImages = await this.contentSrv.getContent(BaseContentTypes.PAGE_BACKGROUND);
    }

    get background(): {url: string, fileName: string} | undefined {
        if (!this.isInit) return;

        const hasBackground = !!this.backgroundImages
            && this.backgroundImages.length > 0;
        if (!hasBackground) return;

        const img  = this.backgroundImages.find(image => image.page === this.navigationSrv.currentPage);
        const file = img && img.image && img.image.fields && img.image.fields.file ? img.image.fields.file : null;

        return hasBackground
            ? file
            : null;
    }

    get style(): any {
        if (!this.background?.url) { return; }

        return {backgroundImage: 'url(\'' + this.background?.url + '\')'};
    }
}
