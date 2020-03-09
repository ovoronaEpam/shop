import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductModel} from './../../products/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductModel[];
  public items$: BehaviorSubject<ProductModel[]>;

  constructor() {
    this.items = [];
    this.items$ = new BehaviorSubject<ProductModel[]>(this.items);
  }

  public addCart(item: ProductModel) {
    this.items.push(item);
  }
}
