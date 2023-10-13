import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAiComponent } from './music-ai.component';

describe('MusicAiComponent', () => {
  let component: MusicAiComponent;
  let fixture: ComponentFixture<MusicAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicAiComponent]
    });
    fixture = TestBed.createComponent(MusicAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
