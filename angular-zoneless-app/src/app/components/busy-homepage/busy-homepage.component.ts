import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncOpenSourcesComponent } from '../async-open-sources/async-open-sources.component';
import { AsyncCardsComponent } from '../async-cards/async-cards.component';
import { AsyncMapComponent } from '../async-map/async-map.component';
import { AsyncTabsComponent } from '../async-tabs/async-tabs.component';

@Component({
  selector: 'app-busy-homepage',
  standalone: true,
  imports: [
    AsyncOpenSourcesComponent,
    AsyncCardsComponent,
    AsyncMapComponent,
    AsyncTabsComponent,
  ],
  templateUrl: './busy-homepage.component.html',
  styleUrls: ['./busy-homepage.component.css'],
})
export class BusyHomepageComponent {
  @Output() onStart = new EventEmitter<boolean>();

  _diff = 0;
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
