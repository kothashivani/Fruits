export interface Product {
  id: string; // Changed to string to match typical mock IDs like 'prod1'
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: 'Fruit' | 'Vegetable' | 'Other'; // Example categories
  quantity?: number; // Optional, might be useful for cart item extension
}
