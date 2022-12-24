import {Component, Input} from '@angular/core';
import {Image}            from '../../models';

@Component({
    selector:    'ap-card',
    templateUrl: './card.component.html',
    styleUrls:   ['./card.component.scss'],
})
export class CardComponent {
    @Input() images!: Image[];
}
