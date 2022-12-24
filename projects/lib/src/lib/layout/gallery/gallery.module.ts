import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
import {RouterModule}      from '@angular/router';
import {NavigationService} from '../../service';
import {GalleryComponent}  from './gallery.component';

@NgModule({
    declarations: [GalleryComponent],
    imports:      [
        RouterModule,
        CommonModule,
    ],
    exports:      [GalleryComponent],
    providers:    [NavigationService],
})
export class GalleryModule {}

export * from './gallery.component';
