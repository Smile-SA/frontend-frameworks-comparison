import { Component } from '@angular/core';
import { StaticLayoutComponent } from '../../layouts/static-layout/static-layout.component';
import { HomepageComponent } from '../../components/homepage/homepage.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [StaticLayoutComponent, HomepageComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {}
