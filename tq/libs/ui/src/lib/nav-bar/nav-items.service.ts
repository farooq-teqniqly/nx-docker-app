import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {
  constructor() { }

  getNavItems(): Observable<Nav[]> {
    return of([
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
    ]);
  }
}
