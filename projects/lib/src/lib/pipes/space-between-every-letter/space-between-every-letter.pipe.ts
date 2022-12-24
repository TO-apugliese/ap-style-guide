import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'spaceBetweenEveryLetter'})
export class SpaceBetweenEveryLetterPipe implements PipeTransform {
    transform(value: string): string {
        const CharArray = Array.from(value);

        return CharArray.join(' ');
    }
}
