import { Component, OnInit } from '@angular/core';
import { ORDERS } from 'src/app/dummy_data';

@Component({
  selector: 'app-orders-managements',
  templateUrl: './orders-managements.component.html',
  styleUrls: ['./orders-managements.component.css'],
})
export class OrdersManagementsComponent implements OnInit {
  public ORDERS = ORDERS;
  constructor() {}

  ngOnInit(): void {}
}
