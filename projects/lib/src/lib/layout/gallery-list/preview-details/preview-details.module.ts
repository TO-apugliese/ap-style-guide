import {CommonModule}            from '@angular/common';
import {NgModule}                from '@angular/core';
import {RouterModule}            from '@angular/router';
import {GalleryModule}           from '../../gallery/gallery.module';
import {CardModule}              from '../../card/card.module';
import {PreviewDetailsComponent} from './preview-details.component';

@NgModule({
  declarations: [PreviewDetailsComponent],
  imports:      [
    RouterModule,
    CommonModule,
    CardModule,
    GalleryModule,
  ],
  exports:      [PreviewDetailsComponent],
})
export class PreviewDetailsModule {}
