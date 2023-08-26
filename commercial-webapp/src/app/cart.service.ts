import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartItems: any[] = [];
  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart1(product: any) {
    const currentCart = this.cartItemsSubject.value;
    const existingItem = currentCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }

    this.cartItemsSubject.next(currentCart);
  }


  addToCart(product: any) {
    this.cartItems.push(product); 
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  purchase() {
    this.cartItems.forEach(item => {
      item.purchased = true;
    });
    this.cartItems = [];
  }
}
