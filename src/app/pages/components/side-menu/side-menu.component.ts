import { Input } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
  public menuBtn: any;

  ngOnInit(): void {
    this.menuBtn = document.getElementById('menu');
    this.checkUrl();
  }

  checkUrl(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getSelectedItem(event);
      }
    });
  }

  getSelectedItem(event: NavigationEnd): void {
    const url = event.url;
    this.selectedItem = this.items.findIndex((item) => url.includes(item.url));
  }

  changeSelectedItem(index: number): void {
    this.selectedItem = index;
  }

  toggleSideMenu() {
    this.isOpened = !this.isOpened;
    // this.isOpened
    //   ? this.menuBtn.classList.remove('menu-btn-clicked')
    //   : this.menuBtn.classList.add('menu-btn-clicked');
    this.sideMenuOpen.emit(this.isOpened);
  }
}
