import { Injectable, signal } from '@angular/core';
import { CartUtils } from './utils/utils';
import { CartItem, Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  cart = signal<Product[]>([]);

  // Aggiunge un nuovo prodotto o incrementa la quantità
  addProduct(product: Omit<Product, 'quantity'>) {
    this.cart.update((items) => {
      const index = CartUtils.findIndexById(items, product.id);

      // Se non esiste, lo aggiungo con quantity = 1
      if (index === -1) {
        return [...items, { ...product, quantity: 1 }];
      }

      // Se esiste, incremento la quantità
      return CartUtils.updateQuantity(items, index, 1);
    });
  }

  // Rimuove o decrementa la quantità di un prodotto
  removeProduct(productId: number) {
    this.cart.update((items) => {
      const index = CartUtils.findIndexById(items, productId);

      // Se l'item non esiste, torno array invariato
      if (index === -1) {
        return items;
      }

      // Altrimenti decremento la quantità (o rimuovo se va a 0)
      return CartUtils.updateQuantity(items, index, -1);
    });
  }
}
