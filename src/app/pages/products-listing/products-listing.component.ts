import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/dummy_data';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css'],
})
export class ProductsListingComponent implements OnInit {
  public products = PRODUCTS;
  constructor() {}
  ngOnInit(): void {}
}
