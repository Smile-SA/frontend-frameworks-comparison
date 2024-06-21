import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
