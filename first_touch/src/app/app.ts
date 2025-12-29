import { Component, signal } from '@angular/core';
import { Lable } from './lable/lable';

@Component({
  selector: 'app-root',
  imports: [Lable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'first_touch'
}
