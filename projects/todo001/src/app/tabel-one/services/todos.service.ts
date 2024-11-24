import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosSig = signal<TodoInterface[]>([]);
}
 

