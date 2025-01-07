// cart-utils.ts

import { HasIdAndQuantity } from "../models/utils-interfaces";

export class CartUtils {
    // Trova l'indice di un item con un certo id
    static findIndexById<T extends HasIdAndQuantity>(items: T[], itemId: number): number {
      return items.findIndex((item) => item.id === itemId);
    }
  
    // Aggiorna la quantità dell’elemento all’indice "index" di "delta" unità.
    // Se la nuova quantità scende a 0 o meno, l'elemento viene rimosso.
    static updateQuantity<T extends HasIdAndQuantity>(items: T[], index: number, delta: number): T[] {
      return items
        .map((item, i) => {
          if (i !== index) {
            return item;
          }
          const newQuantity = item.quantity + delta;
          return newQuantity > 0
            ? { ...item, quantity: newQuantity }
            : undefined; // Se <= 0, lo segno come "undefined"
        })
        .filter(Boolean) as T[]; // Tolgo gli item "undefined"
    }
  }
  