import {Component, Input} from '@angular/core';
import {BaseComponent}    from '../../shared/base.component';

@Component({
    template: ''
})
export abstract class FormComponent extends BaseComponent<any, any> {
    @Input() model: any;
    @Input() field!: string;

    get value(): any {
        return this.model[this.field];
    }

    set value(value: any) {
        this.model[this.field] = value;
    }
}
