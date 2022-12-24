import {Component}     from '@angular/core';
import {BaseComponent} from '../../shared/base.component';

@Component({
    selector:    'ap-address',
    templateUrl: './address.component.html',
})
export class AddressComponent extends BaseComponent<any, any> {
    constructor() {
        super();
    }
}
