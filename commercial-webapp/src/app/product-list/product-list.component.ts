import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: any[] = [];
  categories: string[] = []; 
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = Number.MAX_VALUE;
  // Filtered products based on category and price range
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const categoryMatch = this.selectedCategory === '' || product.category === this.selectedCategory;
      const priceRangeMatch =
        (!this.minPrice || product.price >= this.minPrice) && (!this.maxPrice || product.price <= this.maxPrice);
      return categoryMatch && priceRangeMatch;
    });
  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }


  extractCategories(): void {
    this.categories = Array.from(new Set(this.products.map(product => product.category)));
  }

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(products => {
      this.products = products; // Assign data when it's available
    });
    this.extractCategories();
    this.applyFilters();
  }
}






