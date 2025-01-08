import { Component, signal } from '@angular/core';
import { Product } from '../models/product';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-cart',
    imports: [JsonPipe],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {
  products = signal<Product[]>(initialState)
}

const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "assets/images/a.jpg",
    description: "lorem...",
    cost: 10,
    quantity: 0
  },
  {
    id: 2,
    name: "Felpa",
    description: "lorem...",
    image: "assets/images/b.jpg",
    cost: 5,
    quantity: 0
  },
  {
    id: 3,
    name: "Giubba",
    description: "lorem...",
    image: "assets/images/c.jpg",
    cost: 2,
    quantity: 0
  },
  {
    id: 4,
    name: "Modella  ",
    description: "lorem...",
    image: "assets/images/modella1.jpg",
    cost: 0,
    quantity: 0
  }
]