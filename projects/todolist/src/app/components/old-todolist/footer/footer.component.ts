import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo, TodosOldService } from '../todos-old.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private location = inject(Location);
  private todosService = inject(TodosOldService);

  get todos(): Todo[] {
    return this.todosService.getItems();
  }

  get activeTodos(): Todo[] {
    return this.todosService.getItems('active');
  }

  get completedTodos(): Todo[] {
    return this.todosService.getItems('completed');
  }

  get filter(): string {
    return this.location.path().split('/')[1] || 'all';
  }

  clearCompleted() {
    this.todosService.clearCompleted();
  }
}
