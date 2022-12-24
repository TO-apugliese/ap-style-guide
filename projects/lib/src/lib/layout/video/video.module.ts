import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
import {RouterModule}      from '@angular/router';
import {NavigationService} from '../../service';
import {VideoComponent}    from './video.component';

@NgModule({
    declarations: [VideoComponent],
    imports:      [
        CommonModule,
        RouterModule,
    ],
    exports:      [VideoComponent],
    providers:    [NavigationService],
})
export class VideoModule {}

export * from './video.component';