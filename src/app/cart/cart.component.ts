import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model'; // Importer l'interface CartItem

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      image: 'assets/images/wheyprot.jpg',
      name: 'Whey Proteine',
      price: 100,
      quantity: 1
    },
    {
      image: 'assets/images/creatine.jpg',
      name: 'Creatine',
      price: 150,
      quantity: 2
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(item: CartItem): void { // Utiliser CartItem pour typer le paramètre item
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  updateQuantity(item: CartItem, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newQuantity = parseInt(inputElement.value, 10);

    if (newQuantity > 0) {
      item.quantity = newQuantity;
    } else {
      inputElement.value = item.quantity.toString(); // Réinitialiser à la quantité précédente si la valeur est invalide
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
