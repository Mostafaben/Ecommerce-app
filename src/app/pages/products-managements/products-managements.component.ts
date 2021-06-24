import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PRODUCTS_MANAGEMENT_PAGES } from 'src/app/shared/ui_config';

@Component({
  selector: 'app-products-managements',
  templateUrl: './products-managements.component.html',
  styleUrls: ['./products-managements.component.css'],
})
export class ProductsManagementsComponent implements OnInit {
  readonly SUB_PAGES = PRODUCTS_MANAGEMENT_PAGES;
  public selectedPage: number = 0;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.setSelectedPage(this._router.url);
  }

  changePage(index: number) {
    this.selectedPage = index;
  }

  setSelectedPage(url: string) {
    this.selectedPage = this.SUB_PAGES.findIndex((e) => url.includes(e.url));
  }
}
