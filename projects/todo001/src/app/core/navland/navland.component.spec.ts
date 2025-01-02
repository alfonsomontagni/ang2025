import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavlandComponent } from './navland.component';

describe('NavlandComponent', () => {
  let component: NavlandComponent;
  let fixture: ComponentFixture<NavlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation bar', () => {
    const navElement = fixture.debugElement.query(By.css('nav'));
    expect(navElement).toBeTruthy();
  });

  it('should contain a link element', () => {
    const linkElement = fixture.debugElement.query(By.css('a'));
    expect(linkElement).toBeTruthy();
  });

  it('should have the correct link text', () => {
    const linkElement = fixture.debugElement.query(By.css('a'));
    expect(linkElement.nativeElement.textContent).toBe('test');
  });

  it('should have proper CSS classes for styling', () => {
    const navContainer = fixture.debugElement.query(By.css('div.fixed'));
    expect(navContainer.classes['w-full']).toBeTruthy();
    expect(navContainer.classes['bg-white']).toBeTruthy();
  });
});
