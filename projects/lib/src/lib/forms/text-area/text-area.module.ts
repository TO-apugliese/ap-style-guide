import {NgModule}          from '@angular/core';
import {FormsModule}       from '@angular/forms';
import {CommonModule}      from '@angular/common';
import {TextAreaComponent} from './text-area.component';

@NgModule({
    declarations: [TextAreaComponent],
    exports:      [TextAreaComponent],
    imports:      [FormsModule, CommonModule],
})
export class TextAreaModule {}

export * from './text-area.component';
