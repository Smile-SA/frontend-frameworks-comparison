import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  start = false;
  count = 0;
  time = 0;
  channel = new MessageChannel();
  port = this.channel.port2;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.channel.port1.onmessage = () => {
      this.zone.run(() => this.count = this.count + 1);
      this.increment();
    };
  }

  startCount() {
    if (this.count === 0) {
      this.time = Date.now();
      this.start = true;
      this.increment();
    } else {
      this.count = 0;
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
