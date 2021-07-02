import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS, USERS } from 'src/app/dummy_data';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css'],
})
export class OrderPreviewComponent implements OnInit {
  public orderId: any;
  public products = PRODUCTS.slice(0, 3);
  public user = USERS[0];
  constructor(private _activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.orderId = this._activatedRouter.snapshot.params.id;
  }
}
