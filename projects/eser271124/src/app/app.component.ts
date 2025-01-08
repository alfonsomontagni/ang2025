import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ese001Component } from './esercizi/ese001/ese001.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Ese001Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eser271124';
}
