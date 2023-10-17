import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProModalComponent } from './pro-modal.component';

describe('ProModalComponent', () => {
  let component: ProModalComponent;
  let fixture: ComponentFixture<ProModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProModalComponent]
    });
    fixture = TestBed.createComponent(ProModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
