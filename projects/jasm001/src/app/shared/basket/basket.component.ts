import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'app-basket',
    imports: [
        CommonModule
    ],
    templateUrl: './basket.component.html',
    styleUrl: './basket.component.css'
})
export default class BasketComponent {
  products = signal([
    { id: 1, name: 'Caffè', price: 3, amount: 1 },
    { id: 2, name: 'Zucchero', price: 15, amount: 1 },
  ]);

  syncService = inject(SyncService);

  constructor() {
    effect(() => this.syncService.sync(this.products()));
  }

  totalPrice = computed(() =>
    this.products().reduce(
      (total, product) => total + product.price * product.amount,
      0,
    ),
  );

  decrease(id: number) {
    this.#change(id, (product) =>
      product.amount > 0 ? { ...product, amount: product.amount - 1 } : product,
    );
  }

  increase(id: number) {
    this.#change(id, (product) => ({
      ...product,
      amount: product.amount + 1,
    }));
  }

  #change(id: number, callback: (product: Product) => Product) {
    this.products.update((products) =>
      products.map((p) => (p.id === id ? callback(p) : p)),
    );
  }
}
