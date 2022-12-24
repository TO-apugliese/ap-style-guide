import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
import {RouterModule}      from '@angular/router';
import {NavigationService} from '../../service';
import {GalleryModule}     from '../gallery/gallery.module';
import {CardComponent}     from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports:      [
        CommonModule,
        GalleryModule,
        RouterModule,
    ],
    exports:      [CardComponent],
    providers:    [NavigationService],
})
export class CardModule {}

export * from './card.component';
