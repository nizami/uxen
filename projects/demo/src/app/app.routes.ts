import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'text',
    loadComponent: () => import('./views/text/text-view'),
  },
  {
    path: 'card',
    loadComponent: () => import('./views/card-view/card-view'),
  },
  {
    path: 'button',
    loadComponent: () => import('./views/button/button-view'),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./views/dialog/dialog-view'),
  },
];
