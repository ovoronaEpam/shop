import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/components/cart.component';
import { ProductModule} from './products.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [CartComponent], // export things to be imported in another module
  declarations: [CartComponent],
})
export class CartModule { }
