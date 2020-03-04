import { Component, OnInit } from '@angular/core';

import {ProductModel} from './../../services/product.model';
import { ProductsServiceService } from './../../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsServiceService] // можно, но не стои так регистрировать сервисы
})
export class ProductListComponent implements OnInit {
  items: ProductModel[];

  constructor(
    private productService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.items = this.productService.getProducts();
  }

}
