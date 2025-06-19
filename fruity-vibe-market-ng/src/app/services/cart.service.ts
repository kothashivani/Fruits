import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  constructor() {
    // Load cart from localStorage if available (optional enhancement)
    // const storedCart = localStorage.getItem('fruityCart');
    // if (storedCart) {
    //   this.itemsSubject.next(JSON.parse(storedCart));
    // }
  }

  addItem(product: Product, quantity: number = 1): void {
    const currentItems = this.itemsSubject.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ ...product, quantity });
    }
    this.itemsSubject.next([...currentItems]); // Emit new array
    // this.saveCart(); // Optional: for localStorage
  }

  updateQuantity(productId: string, quantity: number): void {
    const currentItems = this.itemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
      if (quantity > 0) {
        currentItems[itemIndex].quantity = quantity;
      } else {
        // Remove item if quantity is 0 or less
        currentItems.splice(itemIndex, 1);
      }
      this.itemsSubject.next([...currentItems]);
      // this.saveCart();
    }
  }

  removeItem(productId: string): void {
    const currentItems = this.itemsSubject.value.filter(item => item.id !== productId);
    this.itemsSubject.next(currentItems);
    // this.saveCart();
  }

  getCartTotal(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((total, item) => total + (item.price * item.quantity), 0))
    );
  }

  getCartItemCount(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((count, item) => count + item.quantity, 0))
    );
  }

  clearCart(): void {
    this.itemsSubject.next([]);
    // this.saveCart();
  }

  // private saveCart(): void { // Optional: for localStorage
  //   localStorage.setItem('fruityCart', JSON.stringify(this.itemsSubject.value));
  // }
}
