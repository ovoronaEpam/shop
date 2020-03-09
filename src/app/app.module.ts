import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart.module';
import { ProductModule} from './products.module';

@NgModule({
  declarations: [
    AppComponent,
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
