import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHomepageComponent } from './dynamic-homepage.component';

describe('DynamicHomepageComponent', () => {
  let component: DynamicHomepageComponent;
  let fixture: ComponentFixture<DynamicHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicHomepageComponent]
    });
    fixture = TestBed.createComponent(DynamicHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
