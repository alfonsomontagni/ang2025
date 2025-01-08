import { Component, inject } from '@angular/core';
import { Todo, TodosOldService } from '../todos-old.service';
import { Location } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
    selector: 'app-todo-list-old',
    imports: [TodoItemComponent],
    templateUrl: './todo-list-old.component.html',
    styleUrl: './todo-list-old.component.css'
})
export class TodoListOldComponent {
  private location = inject(Location);
  private todosService = inject(TodosOldService);

  get todos(): Todo[] {
    const filter = this.location.path().split('/')[1] || 'all';
    return this.todosService.getItems(filter);
  }

  get activeTodos(): Todo[] {
    return this.todosService.getItems('active');
  }

  removeTodo(todo: Todo): void {
    this.todosService.removeItem(todo);
  }

  toggleAll(e: Event) {
    const input = e.target as HTMLInputElement;
    this.todosService.toggleAll(input.checked);
  }
}
