import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Page Components
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home - Fruity Vibe Market' },
  { path: 'shop', component: ShopComponent, title: 'Shop - Fruity Vibe Market' },
  { path: 'product/:id', component: ProductDetailComponent, title: 'Product Details - Fruity Vibe Market' },
  { path: 'cart', component: CartComponent, title: 'Your Cart - Fruity Vibe Market' },
  { path: 'about', component: AboutUsComponent, title: 'About Us - Fruity Vibe Market' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us - Fruity Vibe Market' },
  // Consider adding a wildcard route for 404 pages later if desired
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
