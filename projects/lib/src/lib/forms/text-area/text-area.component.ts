import {Component, OnInit} from '@angular/core';
import {waitFor}           from '../../shared/util';
import {FormComponent}     from '../shared/form.component';

declare var M: any;

@Component({
    selector:    'ap-text-area',
    templateUrl: './text-area.component.html',
    styleUrls:   ['./text-area.component.scss'],
})
export class TextAreaComponent extends FormComponent implements OnInit {
    constructor() {
        super();
    }

    async ngOnInit(): Promise<void> {
        await waitFor(() => !!M && !!M.textareaAutoResize && !!M.CharacterCounter.init);

        waitFor<HTMLElement | null>(() => document.querySelector(`#${this.field}`))
            .then(el => M.textareaAutoResize(el));
    }
}
