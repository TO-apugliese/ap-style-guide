import {Component, Input} from '@angular/core';

@Component({
  selector:    'ap-video',
  templateUrl: './video.component.html',
  styleUrls:   ['./video.component.scss'],
})
export class VideoComponent {
  @Input() url!: string | undefined;
}
