import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  sync(products: Product[]) {
    console.log(products);
  }
}
