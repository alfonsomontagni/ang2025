import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageList01Component } from './image-list01.component';

describe('ImageList01Component', () => {
  let component: ImageList01Component;
  let fixture: ComponentFixture<ImageList01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageList01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageList01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
