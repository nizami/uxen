import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./views/button-view/button-view').then((x) => x.ButtonView),
  },
];
