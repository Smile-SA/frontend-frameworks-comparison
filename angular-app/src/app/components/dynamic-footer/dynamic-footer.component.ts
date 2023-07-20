import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-footer',
  templateUrl: './dynamic-footer.component.html',
  styleUrls: ['./dynamic-footer.component.css']
})
export class DynamicFooterComponent {
  footerChildrenOpen: number | undefined = undefined;

	handleToggleFooterChildren(event: any, index: number) {
    event.preventDefault();
		this.footerChildrenOpen = this.footerChildrenOpen === index ? undefined : index;
	}
}
