import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private purchaseHistory: any[] = [];

  constructor() {}

  getPurchaseHistory() {
    return this.purchaseHistory;
  }

  addPurchase(purchase: any) {
    this.purchaseHistory.push(purchase);
  }
}
