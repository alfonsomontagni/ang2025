import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarPlusComponent } from './core/navbar-plus/navbar-plus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    NavbarPlusComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}