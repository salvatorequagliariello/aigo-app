import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationErrorAlertComponent } from './generation-error-alert.component';

describe('GenerationErrorAlertComponent', () => {
  let component: GenerationErrorAlertComponent;
  let fixture: ComponentFixture<GenerationErrorAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerationErrorAlertComponent]
    });
    fixture = TestBed.createComponent(GenerationErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
