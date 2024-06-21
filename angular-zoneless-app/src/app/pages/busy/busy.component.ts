import { Component } from '@angular/core';
import { DynamicLayoutComponent } from '../../layouts/dynamic-layout/dynamic-layout.component';
import { BusyHomepageComponent } from '../../components/busy-homepage/busy-homepage.component';

@Component({
  selector: 'app-busy',
  standalone: true,
  imports: [DynamicLayoutComponent, BusyHomepageComponent],
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.css'],
})
export class BusyComponent {}
