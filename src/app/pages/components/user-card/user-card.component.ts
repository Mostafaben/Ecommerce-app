import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/shared/interfaces/user_interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserDetails | undefined;
  constructor() {}

  ngOnInit(): void {}
}
