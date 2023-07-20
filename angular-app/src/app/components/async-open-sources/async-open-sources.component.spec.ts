import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncOpenSourcesComponent } from './async-open-sources.component';

describe('AsyncOpenSourcesComponent', () => {
  let component: AsyncOpenSourcesComponent;
  let fixture: ComponentFixture<AsyncOpenSourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncOpenSourcesComponent]
    });
    fixture = TestBed.createComponent(AsyncOpenSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
