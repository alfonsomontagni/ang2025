import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListSignals01Component } from './image-list-signals01.component';

describe('ImageListSignals01Component', () => {
  let component: ImageListSignals01Component;
  let fixture: ComponentFixture<ImageListSignals01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListSignals01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageListSignals01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
