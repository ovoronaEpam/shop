import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart.module';
import { ProductModule} from './products.module';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
