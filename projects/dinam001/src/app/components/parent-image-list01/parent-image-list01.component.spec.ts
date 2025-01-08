import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentImageList01Component } from './parent-image-list01.component';

describe('ParentImageList01Component', () => {
  let component: ParentImageList01Component;
  let fixture: ComponentFixture<ParentImageList01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentImageList01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentImageList01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
