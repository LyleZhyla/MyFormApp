// src/app/main-app/my-purchases/my-purchases.routes.ts
import { Routes } from '@angular/router';
import { MyPurchasesPage } from './my-purchases.page';

export const MY_PURCHASES_ROUTES: Routes = [
  {
    path: '',
    component: MyPurchasesPage,
    children: [
      // ✅ Existing pages
      {
        path: 'all',
        loadComponent: () =>
          import('./order-list/order-list.page').then((m) => m.OrderListPage),
        data: { status: 'all' },
      },
      {
        path: 'to-pay',
        loadComponent: () =>
          import('./to-pay/to-pay.page').then(m => m.ToPayPage),
      },
      {
        path: 'to-ship',
        loadComponent: () =>
          import('./to-ship/to-ship.page').then(m => m.ToShipPage),
      },
      {
        path: 'to-receive',
        loadComponent: () =>
          import('./to-receive/to-receive.page').then(m => m.ToReceivePage),
      },
      {
        path: 'completed',
        loadComponent: () =>
          import('./completed/completed.page').then(m => m.CompletedPage),
      },
      {
        path: 'cancelled',
        loadComponent: () =>
          import('./cancelled/cancelled.page').then(m => m.CancelledPage),
      },

      // ✅ OrderList with status-based filtering
      
      {
        path: 'all',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'all' },
      },
      {
        path: 'list-to-pay',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-pay' },
      },
      {
        path: 'list-to-ship',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-ship' },
      },
      {
        path: 'list-to-receive',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'to-receive' },
      },
      {
        path: 'list-completed',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'completed' },
      },
      {
        path: 'list-cancelled',
        loadComponent: () =>
          import('./order-list/order-list.page').then(m => m.OrderListPage),
        data: { status: 'cancelled' },
      },

      // ✅ Default redirect
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
    ],
  },
];
