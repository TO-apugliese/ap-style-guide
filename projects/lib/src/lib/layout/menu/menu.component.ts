import {Component}     from '@angular/core';
import {BaseComponent} from '../../shared/base.component';

@Component({
    selector:    'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls:   ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent<any, any> {
    opened = false;

    constructor() {
        super();
    }

    open(): void {
        this.opened = true;
    }

    close(): void {
        this.opened = false;
    }

    toggle(): void {
        this.opened = !this.opened;
    }
}
