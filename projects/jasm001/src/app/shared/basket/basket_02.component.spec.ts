
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import BasketComponent from './basket.component';
import { SyncService } from '../../services/sync.service';

describe('BasketComponent 02', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let syncServiceSpy: jasmine.SpyObj<SyncService>;

  beforeEach(async () => {
    // Creazione di un mock per SyncService
    syncServiceSpy = jasmine.createSpyObj('SyncService', ['sync']);

    await TestBed.configureTestingModule({
      imports: [BasketComponent], // Importa il componente standalone
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

  it('02 should increase the quantity of the product', () => {
    const initialAmount = component.products()[0].amount;
    component.increase(1); // Incrementa il prodotto con id 1
    const updatedAmount = component.products()[0].amount;

    expect(updatedAmount).toBe(initialAmount + 1);
  });

  it('should run the SyncService 02', () => {
    // Utilizzo dello spy creato in `beforeEach` senza reinvocare spyOn
    const spy = syncServiceSpy.sync;

    // Triggera il rilevamento dei cambiamenti
    fixture.detectChanges();

    // Verifica che `sync` sia stato chiamato almeno una volta inizialmente
    expect(spy).toHaveBeenCalledTimes(1);

    // Trova il pulsante per aumentare la quantità del primo prodotto
    const increaseButton = fixture.debugElement.query(
      By.css('[data-testid="btn-increase"]')
    ).nativeElement;

    // Simula il clic sul pulsante "Aumenta"
    increaseButton.click();
    fixture.detectChanges();

    // Verifica che `sync` sia stato chiamato di nuovo
    expect(spy).toHaveBeenCalledTimes(2);

    // Verifica che il totale sia aggiornato correttamente
    const total: HTMLDivElement = fixture.debugElement.query(
      By.css('[data-testid="total"]')
    ).nativeElement;
    expect(total.textContent?.trim()).toBe('21');
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
      imports: [BasketComponent], // Importa il componente standalone
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

  it('02 should increase the quantity of the product', () => {
    const initialAmount = component.products()[0].amount;
    component.increase(1); // Incrementa il prodotto con id 1
    const updatedAmount = component.products()[0].amount;

    expect(updatedAmount).toBe(initialAmount + 1);
  });

  it('should run the SyncService 02', () => {
    // Creazione di una fixture per testare l'output HTML
    const syncService = TestBed.inject(SyncService);
    const spy = spyOn(syncService, 'sync').and.callThrough(); // Cattura il metodo `sync`

    // Triggera il rilevamento dei cambiamenti
    fixture.detectChanges();

    // Verifica che `sync` sia stato chiamato almeno una volta inizialmente
    expect(spy).toHaveBeenCalledTimes(1);

    // Trova il pulsante per aumentare la quantità del primo prodotto
    const increaseButton = fixture.debugElement.query(
      By.css('[data-testid="btn-increase"]')
    ).nativeElement;

    // Simula il clic sul pulsante "Aumenta"
    increaseButton.click();
    fixture.detectChanges();

    // Verifica che `sync` sia stato chiamato di nuovo
    expect(spy).toHaveBeenCalledTimes(2);

    // Verifica che il totale sia aggiornato correttamente
    const total: HTMLDivElement = fixture.debugElement.query(
      By.css('[data-testid="total"]')
    ).nativeElement;
    expect(total.textContent?.trim()).toBe('18');
  });
});
*/