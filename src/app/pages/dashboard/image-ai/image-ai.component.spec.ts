import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAiComponent } from './image-ai.component';

describe('ImageAiComponent', () => {
  let component: ImageAiComponent;
  let fixture: ComponentFixture<ImageAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageAiComponent]
    });
    fixture = TestBed.createComponent(ImageAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
