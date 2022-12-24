import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
import {RouterModule}      from '@angular/router';
import {NavigationService} from '../../../service';
import {PreviewComponent}  from './preview.component';

@NgModule({
    declarations: [PreviewComponent],
    imports:      [
        RouterModule,
        CommonModule,
    ],
    exports:      [PreviewComponent],
    providers:    [NavigationService],
})
export class PreviewModule {
}
