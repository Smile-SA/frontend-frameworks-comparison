import { Component, NgZone, OnInit, signal } from '@angular/core';
import { DynamicLayoutComponent } from '../../layouts/dynamic-layout/dynamic-layout.component';
import { AsyncHomepageComponent } from '../../components/async-homepage/async-homepage.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [DynamicLayoutComponent, AsyncHomepageComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  start = false;
  count = signal(0);
  time = 0;
  channel = new MessageChannel();
  port = this.channel.port2;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.channel.port1.onmessage = () => {
      this.count.update((x) => x + 1);
      this.increment();
    };
  }

  startCount() {
    if (this.count() === 0) {
      this.time = Date.now();
      this.start = true;
      this.increment();
    } else {
      this.count.set(0);
    }
  }

  increment() {
    if (this.start) {
      if (Date.now() - this.time < 1000) {
        this.port.postMessage('');
      } else {
        this.start = false;
      }
    }
  }
}
