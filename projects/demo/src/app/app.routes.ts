import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'text',
    loadComponent: () => import('./views/text-view/text-view').then((x) => x.TextView),
  },
  {
    path: 'card',
    loadComponent: () => import('./views/card-view/card-view').then((x) => x.CardView),
  },
  {
    path: 'button',
    loadComponent: () => import('./views/button-view/button-view').then((x) => x.ButtonView),
  },
];
