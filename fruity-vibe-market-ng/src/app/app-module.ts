import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { ProductList } from './components/product-list/product-list';
import { ProductCard } from './components/product-card/product-card';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ProductList,
    ProductCard,
    ProductDetail,
    Cart,
    Home,
    Shop,
    AboutUs,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
