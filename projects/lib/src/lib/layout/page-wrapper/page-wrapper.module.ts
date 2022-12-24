import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from '@angular/router';
import {NavigationService}    from '../../service';
import {GalleryModule}        from '../gallery/gallery.module';
import {PageWrapperComponent} from './page-wrapper.component';

@NgModule({
    declarations: [PageWrapperComponent],
    imports:      [
        CommonModule,
        GalleryModule,
        RouterModule,
    ],
    exports:      [PageWrapperComponent],
    providers:    [NavigationService],
})
export class PageWrapperModule {}

export * from './page-wrapper.component';
