import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './../../../products/models/product.model';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  items: Array<ProductModel>;

  public isEmpty(): boolean {
    return this.items.length === 0;
    }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.sub = this.cartService.items$.subscribe(
      data => (this.items = data)
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
