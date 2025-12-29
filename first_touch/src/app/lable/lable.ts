import { Component } from '@angular/core';

@Component({
  selector: 'app-lable',
  imports: [],
  templateUrl: './lable.html',
  styleUrl: './lable.css',
})
export class Lable {
  count: number = 0;

  add(): void {
    this.count++;
  }

}
