import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service'; // For 'Add to Cart'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() isFeaturedList: boolean = false;
  @Input() categoryFilter: string = 'All';
  @Input() searchTermFilter: string = '';

  products$: Observable<Product[]> | undefined;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnChanges(): void {
    // Reload products if filters change
    // This is a simple way; for more complex scenarios, consider more robust detection
    if (!this.isFeaturedList) { // Don't refilter featured list based on shop filters
        this.loadProducts();
    }
  }

  loadProducts(): void {
    if (this.isFeaturedList) {
      this.products$ = this.productService.getFeaturedProducts(4); // Show 4 featured products
    } else {
      this.products$ = this.productService.getProducts(
        this.categoryFilter !== 'All' ? this.categoryFilter : undefined,
        this.searchTermFilter ? this.searchTermFilter : undefined
      );
    }
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    // Optionally, add some user feedback like a toast message
    console.log(product.name + ' added to cart');
  }
}
