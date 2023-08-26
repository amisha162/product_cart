import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Import Observable and of
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/api';
  private products = [
    { id: 1, name: 'TV', category: 'Electirc', price: 100000 },
    { id: 2, name: 'Washing machine', category: 'Electric', price: 15000 },
    { id: 3, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 4, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 100 },
    { id: 6, name: 'Tablet', category: 'Electronics', price: 300 },
    { id: 7, name: 'T-shirt', category: 'Clothing', price: 20 },
    { id: 8, name: 'Jeans', category: 'Clothing', price: 50 },
    { id: 9, name: 'Shoes', category: 'Footwear', price: 70 },
    { id: 10, name: 'Backpack', category: 'Accessories', price: 40 }
  ];

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<any[]> {
  //   return of(this.products);
  // }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }
}