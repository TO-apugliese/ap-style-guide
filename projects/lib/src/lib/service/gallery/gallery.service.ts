import {Injectable} from '@angular/core';
import {Image}      from '../../models';

@Injectable()
export class GalleryService {
    private _show             = false;
    private _images: Image[] = [];
    private _selectedIndex    = 0;

    set images(values: Image[]) {
        if (!values) { return; }

        this._images = values;
    }

    get images(): Image[] {
        return this._images;
    }

    get imagesUrl(): string[] {
        return this.images.map(img => img?.fields?.file?.url);
    }

    get selectedImageUrl(): string {
        return this.images[this._selectedIndex]?.fields?.file?.url;
    }

    open(): void {
        this._show = true;
        this._selectedIndex = 0;
    }

    close(): void {
        this._show = false;
        this._selectedIndex = 0;
    }

    next(): void {
        if (!this.images) { return; }
        if ((this._selectedIndex + 1) === this.images.length) {
            this._selectedIndex = 0;
            return;
        }

        this._selectedIndex++;
    }

    prev(): void {
        if (!this.images) { return; }
        if (this._selectedIndex - 1 < 0) { this._selectedIndex = this.images.length; }

        this._selectedIndex--;
    }

    select(index: number): void {
        this._selectedIndex = index;
    }

    get isVisible(): boolean {
        return this._show;
    }
}
