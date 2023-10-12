import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAiComponent } from './code-ai.component';

describe('CodeAiComponent', () => {
  let component: CodeAiComponent;
  let fixture: ComponentFixture<CodeAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeAiComponent]
    });
    fixture = TestBed.createComponent(CodeAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
