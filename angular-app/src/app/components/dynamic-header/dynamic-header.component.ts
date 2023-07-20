import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-header',
  templateUrl: './dynamic-header.component.html',
  styleUrls: ['./dynamic-header.component.css']
})
export class DynamicHeaderComponent implements AfterViewInit {
  @ViewChild('rootRef') rootRef: HTMLHeadElement | null = null;
	searchOpen = false;
	menuOpen = false;
	menuChildrenOpen: number | undefined = undefined;
	height = 0;

  get menuStyle() {
    return this.menuOpen ? `display: block; max-height: ${this.height}px; height: ${this.height}px;` : undefined
  }

  ngAfterViewInit() {
    this.height =
			typeof document !== 'undefined'
				? document.body.offsetHeight - (this.rootRef?.offsetHeight ?? 0)
				: 0;
  }

	handleToggleSearch(event: any) {
    event.preventDefault();
		this.searchOpen = !this.searchOpen;
	}

	handleToggleMenu(event: any) {
    event.preventDefault();
		this.menuOpen = !this.menuOpen;
	}

	handleToggleMenuChildren(event: any,index: number) {
    event.preventDefault();
		this.menuChildrenOpen = this.menuChildrenOpen === index ? undefined : index;
	}
}
