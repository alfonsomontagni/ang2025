import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TodoListOldComponent } from './todo-list-old/todo-list-old.component';

@Component({
    selector: 'app-old-todolist',
    imports: [
        HeaderComponent,
        TodoListOldComponent,
        FooterComponent,
    ],
    templateUrl: './old-todolist.component.html',
    styleUrl: './old-todolist.component.css'
})
export class OldTodolistComponent {

}
