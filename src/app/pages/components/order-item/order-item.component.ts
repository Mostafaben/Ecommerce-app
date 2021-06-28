import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/orders_interfaces';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem: Order | any;

  constructor() {}

  ngOnInit(): void {}
}
