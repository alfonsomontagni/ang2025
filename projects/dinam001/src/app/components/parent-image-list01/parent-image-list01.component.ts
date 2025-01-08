import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageListSignals01Component } from '../image-list-signals01/image-list-signals01.component';
import { ImageList01Component } from '../image-list01/image-list01.component';

@Component({
    selector: 'app-parent-image-list01',
    imports: [CommonModule,
        ImageListSignals01Component,
        ImageList01Component
    ],
    templateUrl: './parent-image-list01.component.html',
    styleUrl: './parent-image-list01.component.css'
})
export class ParentImageList01Component {
  parentValue = 'Initial Value';

}
