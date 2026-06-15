import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() toggled = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();
}
