import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageListSignalsComponent } from './components/image-list-signals/image-list-signals.component';
import { ParentImageList01Component } from './components/parent-image-list01/parent-image-list01.component';


@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ImageListComponent,
        ImageListSignalsComponent,
        ParentImageList01Component
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dinam001';
}
