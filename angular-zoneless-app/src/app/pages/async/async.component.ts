import { Component } from '@angular/core';
import { DynamicLayoutComponent } from '../../layouts/dynamic-layout/dynamic-layout.component';
import { AsyncHomepageComponent } from '../../components/async-homepage/async-homepage.component';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [DynamicLayoutComponent, AsyncHomepageComponent],
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
})
export class AsyncComponent {}
