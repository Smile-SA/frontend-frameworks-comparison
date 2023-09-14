import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busy-homepage',
  templateUrl: './busy-homepage.component.html',
  styleUrls: ['./busy-homepage.component.css'],
})
export class BusyHomepageComponent {
  @Output() onStart = new EventEmitter<boolean>();

  _diff: number = 0;
  get diff() {
    if (!this._diff) {
      let start = performance.now();
      for (let i = 0; i < 100_000; i++) {
        for (let j = 0; j < 100_000; j++) {
          if (i % 2 === 0) {
            start += j;
          } else {
            start -= j;
          }
        }
      }
      this._diff = Math.round(performance.now() - start);
    }
    return this._diff;
  }

  handleStart(event: any) {
    event.preventDefault();
    this.onStart.emit();
  }
}
