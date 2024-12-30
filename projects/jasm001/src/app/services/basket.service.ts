import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.interface';
import { SyncService } from './sync.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  products = signal([
    {
      id: 1,
      name: 'Coffee',
      price: 3,
      amount: 1,
    },
    { id: 2, name: 'Schnitzel', price: 15, amount: 1 },
  ]);

  syncService = inject(SyncService);

  constructor() {
    effect(() => this.syncService.sync(this.products()));
  }

  totalPrice = computed(() =>
    this.products().reduce(
      (total:number, product:Product) => total + product.price * product.amount,
      0,
    ),
  );

  decrease(id: number) {
    this.#change(id, (product) =>
      product.amount > 0 ? { ...product, amount: product.amount - 1 } : product,
    );
  }

  increase(id: number) {
    this.#change(id, (product) => ({ ...product, amount: product.amount + 1 }));
  }

  #change(id: number, callback: (product: Product) => Product) {
    this.products.update((products: Product[]) =>
      products.map((product) => {
        if (product.id === id && product.amount > 0) {
          return callback(product);
        } else {
          return product;
        }
      }),
    );
  }
}
