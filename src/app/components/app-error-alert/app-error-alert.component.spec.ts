import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorAlertComponent } from './app-error-alert.component';

describe('AppErrorAlertComponent', () => {
  let component: AppErrorAlertComponent;
  let fixture: ComponentFixture<AppErrorAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppErrorAlertComponent]
    });
    fixture = TestBed.createComponent(AppErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
