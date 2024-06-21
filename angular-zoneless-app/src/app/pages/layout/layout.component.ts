import { Component } from '@angular/core';
import { DynamicLayoutComponent } from '../../layouts/dynamic-layout/dynamic-layout.component';
import { HomepageComponent } from '../../components/homepage/homepage.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DynamicLayoutComponent, HomepageComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {}
