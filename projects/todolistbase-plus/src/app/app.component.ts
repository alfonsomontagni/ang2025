import { Component } from '@angular/core';

import { NavbarPlusComponent } from './core/navbar-plus/navbar-plus.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarPlusComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}