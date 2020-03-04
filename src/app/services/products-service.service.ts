import { Injectable } from '@angular/core';

import { ProductModel } from './product.model';
@Injectable()
export class ProductsServiceService { // надо поправить название класса и название файла. не нужно дублировать Service два раза

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel('prod1', 'product 1', 1),
      new ProductModel('prod2', 'product 2', 2),
      new ProductModel('prod3', 'product 3', 3),
    ];

  }
}
