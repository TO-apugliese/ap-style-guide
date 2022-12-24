import {NgModule}            from '@angular/core';
import {FormsModule}         from '@angular/forms';
import {CommonModule}        from '@angular/common';
import {InputFieldComponent} from './input-field.component';

@NgModule({
    declarations: [InputFieldComponent],
    exports:      [InputFieldComponent],
    imports:      [FormsModule, CommonModule],
})
export class InputFieldModule {}

export * from './input-field.component';
