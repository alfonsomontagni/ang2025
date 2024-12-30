import { TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';
import { SyncService } from './sync.service';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //
  it('should test the BasketService', () => {
    const basketService = TestBed.inject(BasketService);
    expect(basketService.totalPrice()).toBe(18);
  
    basketService.increase(1);
    expect(basketService.totalPrice()).toBe(21);
  });

  it('should test the BasketService', () => {
    const syncService = TestBed.inject(SyncService);
    const spy = spyOn(syncService, 'sync');
  
    const basketService = TestBed.inject(BasketService);
    TestBed.flushEffects();
  
    basketService.increase(1);
    TestBed.flushEffects();
    expect(spy).toHaveBeenCalledTimes(2);
  });
 /* it('should test the BasketService', () => {
    const syncService = TestBed.inject(SyncService);
    const spy = spyOn(syncService, 'sync');
    TestBed.inject(BasketService);
  
    // effect didn't run
    expect(spy).toHaveBeenCalledTimes(1);
  });
  
  it('should test the BasketService', () => {
    const syncService = TestBed.inject(SyncService);
    const spy = spyOn(syncService, 'sync');
    TestBed.inject(BasketService);
  
    TestBed.flushEffects();
    expect(spy).toHaveBeenCalledTimes(1);
  
    // effect not dirty
    TestBed.flushEffects();
    expect(spy).toHaveBeenCalledTimes(2);
  });*/
});
