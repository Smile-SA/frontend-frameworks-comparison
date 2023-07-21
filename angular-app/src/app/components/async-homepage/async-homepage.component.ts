import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-async-homepage',
  templateUrl: './async-homepage.component.html',
  styleUrls: ['./async-homepage.component.css']
})
export class AsyncHomepageComponent {
  @Input() count: number = 2000;
  @Output() onStart = new EventEmitter<boolean>();

  handleStart(event: any) {
    event.preventDefault();
    this.onStart.emit();
  }
}
