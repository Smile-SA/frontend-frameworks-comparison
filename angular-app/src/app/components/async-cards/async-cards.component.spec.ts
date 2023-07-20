import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCardsComponent } from './async-cards.component';

describe('AsyncCardsComponent', () => {
  let component: AsyncCardsComponent;
  let fixture: ComponentFixture<AsyncCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncCardsComponent]
    });
    fixture = TestBed.createComponent(AsyncCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
