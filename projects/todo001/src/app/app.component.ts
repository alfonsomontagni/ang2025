import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavlandComponent } from './core/navland/navland.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavlandComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo001';
}
