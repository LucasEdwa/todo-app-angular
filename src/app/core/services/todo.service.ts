import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getAll(): Todo[] {
    return this.todos;
  }

  add(title: string): void {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }

  toggle(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  remove(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
