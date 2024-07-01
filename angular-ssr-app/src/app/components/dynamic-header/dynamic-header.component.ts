import { AfterViewInit, Component, ViewChild, signal } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-dynamic-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './dynamic-header.component.html',
  styleUrls: ['./dynamic-header.component.css'],
})
export class DynamicHeaderComponent implements AfterViewInit {
  @ViewChild('rootRef') rootRef: HTMLHeadElement | null = null;
  searchOpen = signal(false);
  menuOpen = signal(false);
  menuChildrenOpen = signal<number | undefined>(undefined);
  height = signal(0);

  get menuStyle() {
    return this.menuOpen()
      ? `display: block; max-height: ${this.height}px; height: ${this.height}px;`
      : undefined;
  }

  ngAfterViewInit() {
    this.height.set(
      typeof document !== 'undefined'
        ? document.body.offsetHeight - (this.rootRef?.offsetHeight ?? 0)
        : 0
    );
  }

  handleToggleSearch(event: any) {
    event.preventDefault();
    this.searchOpen.update((x) => !x);
  }

  handleToggleMenu(event: any) {
    event.preventDefault();
    this.menuOpen.update((x) => !x);
  }

  handleToggleMenuChildren(event: any, index: number) {
    event.preventDefault();
    this.menuChildrenOpen.update((open) =>
      open === index ? undefined : index
    );
  }
}
