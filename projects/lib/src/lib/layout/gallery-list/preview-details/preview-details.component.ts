import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponent}                          from '../../../shared';
import {Item}                                   from '../../../models';

@Component({
    selector:    'preview-details',
    templateUrl: './preview-details.component.html',
    styleUrls:   ['./preview-details.component.scss'],
})
export class PreviewDetailsComponent extends BaseComponent<any, any> {
    @Input() selectedItem!: Item | null;
    @Input() showSize        = true;
    @Input() showOrderButton = true;
    @Output() unselect       = new EventEmitter();

    constructor() {
        super();
    }

    onUnselect(): void {
        this.unselect.next(null);
    }
}
