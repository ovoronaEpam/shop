import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductModule} from './products.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [CartListComponent], // export things to be imported in another module
  declarations: [CartListComponent],
})
export class CartModule { }
