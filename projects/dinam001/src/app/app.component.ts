import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageListSignalsComponent } from './components/image-list-signals/image-list-signals.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImageListComponent,
    ImageListSignalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dinam001';
}
