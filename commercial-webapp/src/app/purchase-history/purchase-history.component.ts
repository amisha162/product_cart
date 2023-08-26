// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-purchase-history',
//   templateUrl: './purchase-history.component.html',
//   styleUrls: ['./purchase-history.component.css']
// })
// export class PurchaseHistoryComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     ngOnInit() {
//       this.purchaseHistory = this.historyService.getPurchaseHistory();
//     }
    
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service'; // Import your history service

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  purchaseHistory: any[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.purchaseHistory = this.historyService.getPurchaseHistory();
  }
}
