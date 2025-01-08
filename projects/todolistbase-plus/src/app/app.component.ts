import { Component } from '@angular/core';

import { NavbarPlusComponent } from './core/navbar-plus/navbar-plus.component';
import { RouterOutlet } from '@angular/router';
import { NavLandComponent } from './core/nav-land/nav-land.component';
import { LoggerService } from './services/logger';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NavbarPlusComponent,
        NavLandComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    LoggerService.debug('Debug message');
    LoggerService.info('Info message');
    LoggerService.warn('Warning message');
    LoggerService.error('Error message');
  }
}