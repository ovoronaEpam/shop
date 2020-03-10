import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './../../products/models/product.model';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  items: Array<ProductModel>;

  public isEmpty(): boolean {
    return true;
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
