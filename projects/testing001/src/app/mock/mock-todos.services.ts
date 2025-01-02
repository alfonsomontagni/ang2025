import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TodoInterface } from '../todos/types/todo.interface';
import { FilterEnum } from '../todos/types/filter.enum';

@Injectable()
export class MockTodosService {
  todosSig = [
    { id: '1', text: 'Todo 1', isCompleted: false },
    { id: '2', text: 'Todo 2', isCompleted: true },
  ];
  filterSig = FilterEnum.all;

  changeFilter(filterName: FilterEnum): void {
    this.filterSig = filterName;
  }

  getTodos() {
    return of(this.todosSig);
  }

  addTodo(text: string): void {
    const newTodo = { id: String(this.todosSig.length + 1), text, isCompleted: false };
    this.todosSig.push(newTodo);
  }

  changeTodo(id: string, text: string): void {
    const todo = this.todosSig.find((todo) => todo.id === id);
    if (todo) todo.text = text;
  }

  removeTodo(id: string): void {
    this.todosSig = this.todosSig.filter((todo) => todo.id !== id);
  }

  toggleTodo(id: string): void {
    const todo = this.todosSig.find((todo) => todo.id === id);
    if (todo) todo.isCompleted = !todo.isCompleted;
  }

  toggleAll(isCompleted: boolean): void {
    this.todosSig = this.todosSig.map((todo) => ({ ...todo, isCompleted }));
  }
}
