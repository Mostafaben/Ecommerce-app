import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  constructor() {}

  public usersList = new Array(5);

  ngOnInit(): void {}
}
