import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dynamic-tabs',
  standalone: true,
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css'],
})
export class DynamicTabsComponent {
  solutionsTabIndex = signal(0);

  handleSolutionsTabIndex(event: any, index: number) {
    event.preventDefault();
    this.solutionsTabIndex.set(index);
  }
}
