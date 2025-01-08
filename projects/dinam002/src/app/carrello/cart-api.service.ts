import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor() { }

}

const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "assets/images/angular.png",
    description: "lorem...",
    cost: 10,
    quantity: 0
  },
  {
    id: 2,
    name: "Bullet",
    description: "lorem...",
    image: "assets/images/react.png",
    cost: 5,
    quantity: 0
  },
  {
    id: 3,
    name: "Pic",
    description: "lorem...",
    image: "assets/images/js.png",
    cost: 2,
    quantity: 0
  }
]