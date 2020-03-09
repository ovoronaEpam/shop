import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/components/product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent], // export things to be imported in another module
  declarations: [ProductListComponent],
})
export class ProductModule { }
