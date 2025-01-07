import { HasIdAndQuantity } from "./utils-interfaces";

export interface CartItem extends HasIdAndQuantity {
    nome: string;
    prezzo: number;
    // quantity: number --> già ereditato da HasIdAndQuantity
  }
  export interface Product extends HasIdAndQuantity  {
    
    name: string;
    image: string;
    description: string;
    cost: number;
  }