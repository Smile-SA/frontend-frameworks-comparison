import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncHomepageComponent } from './async-homepage.component';

describe('AsyncHomepageComponent', () => {
  let component: AsyncHomepageComponent;
  let fixture: ComponentFixture<AsyncHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncHomepageComponent]
    });
    fixture = TestBed.createComponent(AsyncHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
