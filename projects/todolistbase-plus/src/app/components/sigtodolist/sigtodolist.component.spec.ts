import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigtodolistComponent } from './sigtodolist.component';

describe('SigtodolistComponent', () => {
  let component: SigtodolistComponent;
  let fixture: ComponentFixture<SigtodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigtodolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigtodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
