import { Component, OnInit, Input } from '@angular/core';
import { Category, ProductModel } from './../../../products/models/product.model';
import { CartService } from './../../../cart/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  Category = Category;
  @Input() model: ProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}
    onDel() {
      console.log('Del clicked');
      this.cartService.delCart(this.model);
      this.model.isAvailable = true;
    }
  

}
