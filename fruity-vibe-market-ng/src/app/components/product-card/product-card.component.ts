import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(): void {
    if (this.product) {
      this.addToCartEvent.emit(this.product);
    }
  }
}
