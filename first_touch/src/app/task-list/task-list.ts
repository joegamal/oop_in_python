import { Component, Signal } from '@angular/core';
import { Counter } from '../service/counter';

@Component({
  selector: 'taskList',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  count: Signal<number>;
  public constructor(public counter: Counter) {
    this.count = counter.count;
  }
  increment(): void {
    this.counter.increment();
  }
}
