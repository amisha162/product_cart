import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HistoryService } from '../history.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private historyService: HistoryService) { }
  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  purchase() {
    this.cartService.purchase();
    this.historyService.addPurchase({
      date: new Date(),
      items: [...this.cartItems]
    });
    this.cartItems = [];
  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }
}



