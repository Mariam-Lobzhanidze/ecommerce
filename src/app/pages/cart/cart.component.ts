import { Component, OnInit } from '@angular/core';
import { CartService, OrderService } from 'src/app/core/services';
import { Cart } from 'src/app/core/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  cartSum = 0;
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {
    this.cartService
      .getCarts()
      .pipe()
      .subscribe((res) => {
        this.cartItems = res;
        this.cartSum = this.cartItems.reduce(
          (acc, item) => acc + item.total,
          0
        );
      });
  }

  removeItem(item: Cart) {
    this.cartService
      .deleteItem(item.id)
      .pipe()
      .subscribe(() => {
        this.getCarts();
      });
  }

  checkOut() {
    this.orderService
      .createOrder()
      .pipe()
      .subscribe((res) => {
        console.log(res);
        this.getCarts();
      });
  }
}
