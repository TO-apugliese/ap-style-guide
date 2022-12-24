import {Component, Input}       from '@angular/core';
import {Image}                  from '../../models';
import {DeviceDetectionService} from '../../service';

@Component({
    selector:    'ap-gallery',
    templateUrl: './gallery.component.html',
    styleUrls:   ['./gallery.component.scss'],
})
export class GalleryComponent {
    @Input() isPortraitMode = true;

    @Input()
    set images(values: Image[]) {
        this.selected = values[0];
        this._images  = values;
    }

    get images(): Image[] {
        return this._images.filter(img => !!img);
    }

    public selected!: Image;
    private _images!: Image[];
    private defaultTouch = {x: 0, y: 0};

    constructor(private deviceDetectionSrv: DeviceDetectionService) {}

    get hasMultipleImages(): boolean {
        return !!this.images && this.images.length > 1;
    }

    get isMobile(): boolean {
        return this.deviceDetectionSrv.isMobile;
    }

    handleTouchStart(event: TouchEvent): void {
        const touch = event.touches[0] || event.changedTouches[0];

        this.defaultTouch.x = touch.pageX;
        this.defaultTouch.y = touch.pageY;
    }

    handleTouchEnd(event: TouchEvent): void {
        const touch  = event.touches[0] || event.changedTouches[0];
        const deltaX = touch.pageX - this.defaultTouch.x;

        if (Math.abs(deltaX) > 30) {
            if (deltaX > 0) this.prev();
            else this.next();
        }

        this.defaultTouch = {x: 0, y: 0};
    }

    get index(): number {
        return this.images.findIndex(img => img === this.selected);
    }

    next(): void {
        this.selected = this.index === this.images.length - 1
            ? this.images[0]
            : this.images[this.index + 1];
    }

    prev(): void {
        this.selected = this.index === 0
            ? this.images[this.images.length - 1]
            : this.images[this.index - 1];
    }
}
