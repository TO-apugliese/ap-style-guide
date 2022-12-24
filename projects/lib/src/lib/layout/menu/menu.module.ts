import {NgModule}                      from '@angular/core';
import {CommonModule}                  from '@angular/common';
import {RouterModule}                  from '@angular/router';
import {ContentService}                from '../../service';
import {SpaceBetweenEveryLetterModule} from '../../pipes';
import {MenuComponent}                 from './menu.component';

@NgModule({
    declarations: [MenuComponent],
    imports:      [
        RouterModule,
        CommonModule,
        SpaceBetweenEveryLetterModule,
    ],
    exports:      [MenuComponent],
    providers:    [ContentService],
})
export class MenuModule {}

export * from './menu.component';
