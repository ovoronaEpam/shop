import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductModule} from './products.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [CartListComponent, CartItemComponent], // export things to be imported in another module
  declarations: [CartListComponent, CartItemComponent],
})
export class CartModule { }
