import { Component } from '@angular/core';

import { NavbarPlusComponent } from './core/navbar-plus/navbar-plus.component';
import { RouterOutlet } from '@angular/router';
import { NavLandComponent } from './core/nav-land/nav-land.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarPlusComponent,
    NavLandComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}