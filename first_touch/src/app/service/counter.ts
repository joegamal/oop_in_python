import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  private countSignal = signal(0);

  // Expose it as a read-only signal to components
  count = this.countSignal.asReadonly();

  increment() {
    this.countSignal.update(val => val + 1);
  }
}
