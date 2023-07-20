import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css']
})
export class DynamicTabsComponent {
  solutionsTabIndex = 0;

	handleSolutionsTabIndex(event: any, index: number) {
    event.preventDefault();
		this.solutionsTabIndex = index;
	}
}
