import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyGenerationComponent } from './empty-generation.component';

describe('EmptyGenerationComponent', () => {
  let component: EmptyGenerationComponent;
  let fixture: ComponentFixture<EmptyGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyGenerationComponent]
    });
    fixture = TestBed.createComponent(EmptyGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
