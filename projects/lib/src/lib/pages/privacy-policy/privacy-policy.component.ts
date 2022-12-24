import {Component}     from '@angular/core';
import {BaseComponent} from '../../shared';
import {BasePages}     from '../base-pages';

@Component({
    templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyPageComponent extends BaseComponent<any, any> {
    constructor() {
        super();
        this.pageTitle = BasePages.PRIVACY_POLICE;
    }
}
