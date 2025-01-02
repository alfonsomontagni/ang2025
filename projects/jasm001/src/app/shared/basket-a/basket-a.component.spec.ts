import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketAComponent } from './basket-a.component';

describe('BasketAComponent', () => {
  let component: BasketAComponent;
  let fixture: ComponentFixture<BasketAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
