import { Injectable } from '@angular/core';

import { ProductModel } from './../models/product.model';
import { Category } from './../models/product.model';
@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel('prod1', 'product 1', 1, Category.First, true),
      new ProductModel('prod2', 'product 2', 2, Category.First, false),
      new ProductModel('prod3', 'product 3', 3, Category.Second, true),
    ];

  }
}
