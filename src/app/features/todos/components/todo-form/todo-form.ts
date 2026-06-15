import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  @Output() addTodo = new EventEmitter<string>();
  title = '';

  submit() {
    const trimmed = this.title.trim();
    if (!trimmed) return;
    this.addTodo.emit(trimmed);
    this.title = '';
  }
}
