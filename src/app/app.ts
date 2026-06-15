import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './features/todos/components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
