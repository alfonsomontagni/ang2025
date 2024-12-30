import { ComponentFixture, TestBed } from '@angular/core/testing';
import BasketComponent from './basket.component';
import { SyncService } from '../../services/sync.service';

describe('BasketComponent 01', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let syncServiceSpy: jasmine.SpyObj<SyncService>;

  beforeEach(async () => {
    // Creazione di un mock per SyncService
    syncServiceSpy = jasmine.createSpyObj('SyncService', ['sync']);

    await TestBed.configureTestingModule({
      imports: [BasketComponent], // Importa BasketComponent qui
      providers: [
        { provide: SyncService, useValue: syncServiceSpy }, // Mock del servizio
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the quantity of the product', () => {
    const initialAmount = component.products()[0].amount;
    component.increase(1); // Incrementa il prodotto con id 1
    const updatedAmount = component.products()[0].amount;

    expect(updatedAmount).toBe(initialAmount + 1);
  });


});


/*
describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let syncServiceSpy: jasmine.SpyObj<SyncService>;

  beforeEach(async () => {
    // Creazione di un mock per SyncService
    syncServiceSpy = jasmine.createSpyObj('SyncService', ['sync']);

    await TestBed.configureTestingModule({
      imports: [CommonModule], // Rimuovi BasketComponent da `imports`
      declarations: [BasketComponent], // Usa `declarations` per il componente da testare
      providers: [
        { provide: SyncService, useValue: syncServiceSpy }, // Mock del servizio
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the quantity of the product', () => {
    const initialAmount = component.products()[0].amount;
    component.increase(1); // Incrementa il prodotto con id 1
    const updatedAmount = component.products()[0].amount;

    expect(updatedAmount).toBe(initialAmount + 1);
  });
});
*/