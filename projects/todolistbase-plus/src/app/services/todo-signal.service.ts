import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "../components/types/todo.interface";

@Injectable({
    providedIn: 'root'
})
export class TodoSignalService {
    todosSig = signal<TodoInterface[]>([]);

    addTodo(text:string): void {
        const newTodo : TodoInterface ={
            text,
            isCompleted: false,
            id: Math.random().toString(16),
        };

        this.todosSig.update((todos)=>[...todos,newTodo]);
    }
}