import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './products/components/first-component/first-component.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartModule } from './cart.module';
import { ProductModule} from './products.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponent,
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
