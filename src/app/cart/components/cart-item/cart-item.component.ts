import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() model: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
