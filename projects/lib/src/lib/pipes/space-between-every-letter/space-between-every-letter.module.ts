import {NgModule}                    from '@angular/core';
import {SpaceBetweenEveryLetterPipe} from './space-between-every-letter.pipe';

@NgModule({
    declarations: [SpaceBetweenEveryLetterPipe],
    exports:      [SpaceBetweenEveryLetterPipe],
})
export class SpaceBetweenEveryLetterModule {}
