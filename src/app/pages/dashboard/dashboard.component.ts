import { Component, OnInit } from '@angular/core';
import { ADMIN } from 'src/app/dummy_data';
import { AdminDetails } from 'src/app/shared/interfaces/admin_interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public isSideMenuOpen = true;
  public adminDetails: AdminDetails = ADMIN;

  constructor() {}

  ngOnInit(): void {}

  toggleSideMenu(event: boolean): void {
    this.isSideMenuOpen = event;
  }
}
