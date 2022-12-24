import {Component}     from '@angular/core';
import {BasePages}     from '../base-pages';
import {BaseComponent} from '../../shared';

@Component({
    templateUrl: './imprint.component.html',
})
export class ImprintPageComponent extends BaseComponent<any, any> {
    constructor() {
        super();
        this.pageTitle = BasePages.IMPRINT;
    }
}
