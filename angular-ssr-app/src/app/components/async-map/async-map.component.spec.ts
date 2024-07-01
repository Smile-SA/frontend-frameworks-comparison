import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncMapComponent } from './async-map.component';

describe('AsyncMapComponent', () => {
  let component: AsyncMapComponent;
  let fixture: ComponentFixture<AsyncMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncMapComponent]
    });
    fixture = TestBed.createComponent(AsyncMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
