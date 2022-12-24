import {Component}     from '@angular/core';
import {FormComponent} from '../shared/form.component';

@Component({
    selector:    'ap-input-field',
    templateUrl: './input-field.component.html',
})
export class InputFieldComponent extends FormComponent {
    constructor() {
        super();
    }
}
