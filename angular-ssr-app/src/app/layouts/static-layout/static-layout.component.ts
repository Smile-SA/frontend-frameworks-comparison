import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-static-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './static-layout.component.html',
  styleUrls: ['./static-layout.component.css'],
})
export class StaticLayoutComponent {}
