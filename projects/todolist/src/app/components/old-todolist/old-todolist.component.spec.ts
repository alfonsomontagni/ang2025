import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTodolistComponent } from './old-todolist.component';

describe('OldTodolistComponent', () => {
  let component: OldTodolistComponent;
  let fixture: ComponentFixture<OldTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldTodolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
