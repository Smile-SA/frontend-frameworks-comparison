import { Component, EventEmitter, Output, input } from '@angular/core';
import { AsyncOpenSourcesComponent } from '../async-open-sources/async-open-sources.component';
import { AsyncCardsComponent } from '../async-cards/async-cards.component';
import { AsyncMapComponent } from '../async-map/async-map.component';
import { AsyncTabsComponent } from '../async-tabs/async-tabs.component';

@Component({
  selector: 'app-async-homepage',
  standalone: true,
  imports: [
    AsyncOpenSourcesComponent,
    AsyncCardsComponent,
    AsyncMapComponent,
    AsyncTabsComponent,
  ],
  templateUrl: './async-homepage.component.html',
  styleUrls: ['./async-homepage.component.css'],
})
export class AsyncHomepageComponent {
  count = input(2000);
  @Output() onStart = new EventEmitter<boolean>();

  handleStart(event: any) {
    event.preventDefault();
    this.onStart.emit();
  }
}
