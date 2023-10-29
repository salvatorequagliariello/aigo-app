import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartErrorComponent } from './cart-error.component';

describe('CartErrorComponent', () => {
  let component: CartErrorComponent;
  let fixture: ComponentFixture<CartErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartErrorComponent]
    });
    fixture = TestBed.createComponent(CartErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
