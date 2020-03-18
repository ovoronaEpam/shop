import { Component, OnInit } from '@angular/core';

import { ProductModel } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductsService] // так лучше не делать
})
export class ProductListComponent implements OnInit {
  items: Array<ProductModel>;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.items = this.productService.getProducts();
  }

}
