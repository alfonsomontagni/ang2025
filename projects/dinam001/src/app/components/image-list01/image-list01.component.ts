import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-list01',
  standalone: true,
  imports: [],
  templateUrl: './image-list01.component.html',
  styleUrl: './image-list01.component.css'
})
export class ImageList01Component implements OnChanges {
  @Input() value: string = '';

    ngOnChanges(changes: SimpleChanges): void {
      console.log('ImageList 01 Component');
    }
}
