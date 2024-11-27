import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ese001Component } from './ese001.component';

describe('Ese001Component', () => {
  let component: Ese001Component;
  let fixture: ComponentFixture<Ese001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ese001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ese001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
