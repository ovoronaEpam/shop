import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent} from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent, ProductComponent], // export things to be imported in another module
  declarations: [ProductListComponent, ProductComponent],
})
export class ProductModule { }
