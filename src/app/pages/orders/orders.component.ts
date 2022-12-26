import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/interfaces/orders';
import { OrderService } from 'src/app/core/services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]> = this.orderService.getOrders();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
}
