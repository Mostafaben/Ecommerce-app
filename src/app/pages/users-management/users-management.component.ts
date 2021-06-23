import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/dummy_data';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  constructor() {}

  public usersList = USERS;

  ngOnInit(): void {}
}
