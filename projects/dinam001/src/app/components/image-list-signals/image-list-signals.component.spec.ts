import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListSignalsComponent } from './image-list-signals.component';

describe('ImageListSignalsComponent', () => {
  let component: ImageListSignalsComponent;
  let fixture: ComponentFixture<ImageListSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
