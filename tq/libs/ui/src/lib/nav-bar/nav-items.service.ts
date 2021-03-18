import { Injectable } from '@angular/core';
import { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {
  constructor() { }

  getNavItems(): Nav[] {
    return [
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
        name: 'Default Component (Dashboard)',
        exact: false
      }
    ];
  }
}
