import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './Components/first-component/first-component.component';
import { ProductComponentComponent } from './Components/product-component/product-component.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponentComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Несколько файлов не прошли линтинг. Ошибки надо исправлять
// Структура приложения не такая, как предложено, почему?
