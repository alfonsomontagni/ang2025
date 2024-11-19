import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-old-todo',
  standalone: true,
  imports: [
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
  ],
  templateUrl: './old-todo.component.html',
  styleUrl: './old-todo.component.css'
})
export class OldTodoComponent {

}
