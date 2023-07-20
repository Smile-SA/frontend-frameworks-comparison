import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncTabsComponent } from './async-tabs.component';

describe('AsyncTabsComponent', () => {
  let component: AsyncTabsComponent;
  let fixture: ComponentFixture<AsyncTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncTabsComponent]
    });
    fixture = TestBed.createComponent(AsyncTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
