// src/app/main-app/my-purchases/my-purchases.routes.ts
import { Routes } from '@angular/router';
import { MyPurchasesPage } from './my-purchases.page';

export const MY_PURCHASES_ROUTES: Routes = [
  {
    path: '',
    component: MyPurchasesPage,
    children: [
      {
        path: 'all',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'all' },
      },
      {
        path: 'to-pay',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-pay' },
      },
      {
        path: 'to-ship',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-ship' },
      },
      {
        path: 'to-receive',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-receive' },
      },
      {
        path: 'completed',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'completed' },
      },
      {
        path: 'cancelled',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'cancelled' },
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
    ],
  },
];
