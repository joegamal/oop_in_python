import { Component, signal } from '@angular/core';
import { Lable } from './lable/lable';
import { TaskList } from "./task-list/task-list";


@Component({
  selector: 'app-root',
  imports: [Lable, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'first_touch'
}
