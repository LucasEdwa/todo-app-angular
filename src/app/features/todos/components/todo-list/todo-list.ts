import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../../core/services/todo.service';
import { TodoForm } from '../todo-form/todo-form';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoForm, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  private todoService = inject(TodoService);

  get todos() {
    return this.todoService.getAll();
  }

  add(title: string) {
    this.todoService.add(title);
  }

  toggle(id: number) {
    this.todoService.toggle(id);
  }

  remove(id: number) {
    this.todoService.remove(id);
  }

  get completedCount() {
    return this.todoService.getAll().filter(t => t.completed).length;
  }
}
