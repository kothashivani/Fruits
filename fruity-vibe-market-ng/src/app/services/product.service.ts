import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 'f1', name: 'Juicy Apples', price: 2.99, description: 'Crisp and sweet red apples.', imageUrl: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruit' },
    { id: 'f2', name: 'Sweet Bananas', price: 1.99, description: 'Ripe and creamy bananas.', imageUrl: 'https://images.pexels.com/photos/2280997/pexels-photo-2280997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruit' },
    { id: 'v1', name: 'Fresh Carrots', price: 0.99, description: 'Organic and crunchy carrots.', imageUrl: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vegetable' },
    { id: 'v2', name: 'Green Broccoli', price: 2.49, description: 'Healthy green broccoli florets.', imageUrl: 'https://images.pexels.com/photos/47343/broccoli-florets-vegetables-food-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vegetable' },
    { id: 'f3', name: 'Tangy Oranges', price: 3.49, description: 'Seedless and juicy oranges.', imageUrl: 'https://images.pexels.com/photos/2090901/pexels-photo-2090901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Fruit' },
    { id: 'v3', name: 'Ripe Tomatoes', price: 2.79, description: 'Sweet and ripe tomatoes.', imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vegetable' }
  ];

  constructor() { }

  getProducts(category?: string, searchTerm?: string): Observable<Product[]> {
    let filteredProducts = this.products;

    if (category && category !== 'All') {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return of(filteredProducts);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  getFeaturedProducts(count: number = 3): Observable<Product[]> {
    // Simple featured: take the first 'count' products
    return of(this.products.slice(0, count));
  }
}
