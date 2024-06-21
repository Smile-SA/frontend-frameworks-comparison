import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFooterComponent } from './dynamic-footer.component';

describe('DynamicFooterComponent', () => {
  let component: DynamicFooterComponent;
  let fixture: ComponentFixture<DynamicFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFooterComponent]
    });
    fixture = TestBed.createComponent(DynamicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
