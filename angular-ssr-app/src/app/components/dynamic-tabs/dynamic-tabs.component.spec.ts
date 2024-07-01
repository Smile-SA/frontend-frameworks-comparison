import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabsComponent } from './dynamic-tabs.component';

describe('DynamicTabsComponent', () => {
  let component: DynamicTabsComponent;
  let fixture: ComponentFixture<DynamicTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTabsComponent]
    });
    fixture = TestBed.createComponent(DynamicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
