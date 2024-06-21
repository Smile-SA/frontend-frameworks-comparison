import { Component } from '@angular/core';
import { DynamicHeaderComponent } from '../../components/dynamic-header/dynamic-header.component';
import { DynamicFooterComponent } from '../../components/dynamic-footer/dynamic-footer.component';

@Component({
  selector: 'app-dynamic-layout',
  standalone: true,
  imports: [DynamicHeaderComponent, DynamicFooterComponent],
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.css'],
})
export class DynamicLayoutComponent {}
