import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service'; // Adjust path as needed

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public cartService: CartService) { } // Made public for template access
}
