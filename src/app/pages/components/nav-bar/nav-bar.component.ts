import { Component, Input, OnInit } from '@angular/core';
import { AdminDetails } from 'src/app/shared/interfaces/admin_interfaces';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() admin: AdminDetails | undefined;
  readonly NO_IMG_URL = '/assets/download.jpg';

  constructor() {}

  ngOnInit(): void {}
}
