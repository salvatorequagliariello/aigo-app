import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModelLinkComponent } from './dashboard-model-link.component';

describe('DashboardModelLinkComponent', () => {
  let component: DashboardModelLinkComponent;
  let fixture: ComponentFixture<DashboardModelLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardModelLinkComponent]
    });
    fixture = TestBed.createComponent(DashboardModelLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
