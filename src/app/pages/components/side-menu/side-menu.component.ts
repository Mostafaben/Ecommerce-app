import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Route, Router, RouterLink } from '@angular/router';
import { PAGES } from '../../../shared/ui_config';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  @Input() isOpened: boolean = true;
  @Output() sideMenuOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router) {}

  public items = PAGES;
  public selectedItem: number = 0;

  ngOnInit(): void {
    this.getSelectedItem({ url: this._router.url });
    this.checkUrl();
  }

  checkUrl(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getSelectedItem(event);
      }
    });
  }

  getSelectedItem({ url }: any): void {
    this.selectedItem = this.items.findIndex((item) => url.includes(item.url));
  }

  changeSelectedItem(index: number): void {
    this.selectedItem = index;
  }

  toggleSideMenu() {
    this.isOpened = !this.isOpened;
    this.sideMenuOpen.emit(this.isOpened);
  }
}
