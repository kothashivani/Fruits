import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model'; // Not strictly needed here if using service methods

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cartService: CartService) {} // Public to use in template directly

  updateQuantity(itemId: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const quantity = parseInt(inputElement.value, 10);
    if (!isNaN(quantity)) {
      this.cartService.updateQuantity(itemId, quantity);
    }
  }

  removeItem(itemId: string): void {
    this.cartService.removeItem(itemId);
  }
}
