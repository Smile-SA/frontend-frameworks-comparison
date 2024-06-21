import { Component } from '@angular/core';
import { DynamicLayoutComponent } from '../../layouts/dynamic-layout/dynamic-layout.component';
import { DynamicHomepageComponent } from '../../components/dynamic-homepage/dynamic-homepage.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [DynamicLayoutComponent, DynamicHomepageComponent],
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {}
