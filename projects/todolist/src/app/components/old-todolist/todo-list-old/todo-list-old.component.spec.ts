import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListOldComponent } from './todo-list-old.component';

describe('TodoListOldComponent', () => {
  let component: TodoListOldComponent;
  let fixture: ComponentFixture<TodoListOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListOldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
