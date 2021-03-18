import { Component, OnInit } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'tq-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navItems: Nav[] = [
    {
      link: '/',
      name: 'Dashboard Component',
      exact: true
    },
    {
      link: '/nav',
      name: 'Navigation Component',
      exact: false
    },
    {
      link: '/oops',
      name: 'Default Component',
      exact: false
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
