import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyHomepageComponent } from './busy-homepage.component';

describe('BusyHomepageComponent', () => {
  let component: BusyHomepageComponent;
  let fixture: ComponentFixture<BusyHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusyHomepageComponent]
    });
    fixture = TestBed.createComponent(BusyHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
