import { Component, OnInit } from '@angular/core';
import { Nav } from './nav';
import { NavItemsService } from './nav-items.service';

@Component({
  selector: 'tq-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navItems: Nav[];
  constructor(private service: NavItemsService) { }

  ngOnInit(): void {
    this.navItems = this.service.getNavItems();
  }

}
