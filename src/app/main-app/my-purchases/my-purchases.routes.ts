// src/app/main-app/my-purchases/my-purchases.routes.ts
import { Routes } from '@angular/router';
import { MyPurchasesPage } from './my-purchases.page';

export const MY_PURCHASES_ROUTES: Routes = [
  {
    path: '',
    component: MyPurchasesPage,
    children: [
      {
        path: 'to-pay',
        loadComponent: () =>
          import('./to-pay/to-pay.page').then(
            (m) => m.ToPayPage)
            ,
      },
      {
        path: 'to-ship',
        loadComponent: () =>
          import('./to-ship/to-ship.page').then(
            (m) => m.ToShipPage
        ),
      },
      {
        path: 'to-receive',
        loadComponent: () =>
          import('./to-receive/to-receive.page').then(
            (m) => m.ToReceivePage
        ),
      },
      {
        path: 'completed',
        loadComponent: () =>
          import('./completed/completed.page').then(
            (m) => m.CompletedPage
        ),
      },
      {
        path: 'cancelled',
        loadComponent: () =>
          import('./cancelled/cancelled.page').then(
            (m) => m.CancelledPage
        ),
      },
      {
        path: '',
        redirectTo: 'to-pay',
        pathMatch: 'full',
      },
    ],
  },
];
