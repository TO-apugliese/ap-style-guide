import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from '@angular/router';
import {GalleryListComponent} from './gallery-list.component';
import {PreviewModule}        from './preview/preview.module';
import {PreviewDetailsModule} from './preview-details/preview-details.module';

@NgModule({
    declarations: [GalleryListComponent],
    exports:      [GalleryListComponent],
    imports:      [
        RouterModule,
        CommonModule,
        PreviewModule,
        PreviewDetailsModule,
    ],
})
export class GalleryListModule {}

export * from './gallery-list.component';
