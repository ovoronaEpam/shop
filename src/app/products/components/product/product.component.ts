import { Component, OnInit, Input } from '@angular/core';
import { Category, ProductModel } from './../../models/product.model';
import { CartService } from './../../../cart/services/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Category = Category;
  @Input() model: ProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }
  onBuy() {
    console.log('Buy clicked');
    this.cartService.addCart(this.model);
    this.model.isAvailable = false;
  }
}

