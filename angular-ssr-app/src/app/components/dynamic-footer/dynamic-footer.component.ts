import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dynamic-footer',
  standalone: true,
  templateUrl: './dynamic-footer.component.html',
  styleUrls: ['./dynamic-footer.component.css'],
})
export class DynamicFooterComponent {
  footerChildrenOpen = signal<number | undefined>(undefined);

  handleToggleFooterChildren(event: any, index: number) {
    event.preventDefault();
    this.footerChildrenOpen.update((open) =>
      open === index ? undefined : index
    );
  }
}
