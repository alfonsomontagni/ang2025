import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosOldService } from '../todos-old.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private todosService = inject(TodosOldService);

  title = '';

  addTodo() {
    if (this.title) {
      this.todosService.addItem(this.title);

      // Reset title to clear input field.
      this.title = '';
    }
  }
}
