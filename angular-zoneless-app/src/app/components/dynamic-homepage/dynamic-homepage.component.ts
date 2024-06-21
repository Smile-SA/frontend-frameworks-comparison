import { Component } from '@angular/core';
import { DynamicMapComponent } from '../dynamic-map/dynamic-map.component';
import { DynamicTabsComponent } from '../dynamic-tabs/dynamic-tabs.component';

@Component({
  selector: 'app-dynamic-homepage',
  standalone: true,
  imports: [DynamicMapComponent, DynamicTabsComponent],
  templateUrl: './dynamic-homepage.component.html',
  styleUrls: ['./dynamic-homepage.component.css'],
})
export class DynamicHomepageComponent {}
