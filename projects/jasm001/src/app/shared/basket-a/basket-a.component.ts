import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
    selector: 'app-basket-a',
    imports: [],
    templateUrl: './basket-a.component.html',
    styleUrl: './basket-a.component.css'
})
export class BasketAComponent {
  basketService = inject(BasketService);

  products = this.basketService.products;
  totalPrice = this.basketService.totalPrice;

  decrease(id: number) {
    this.basketService.decrease(id);
  }

  increase(id: number) {
    this.basketService.increase(id);
  }
}
