import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLandComponent } from './nav-land.component';

describe('NavLandComponent', () => {
  let component: NavLandComponent;
  let fixture: ComponentFixture<NavLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
