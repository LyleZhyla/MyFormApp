import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default redirect → login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth pages
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./registration/registration.page').then(
        m => m.RegistrationPage
      ),
  },

  // Product flow
  {
    path: 'product-list',
    loadComponent: () =>
      import('./product-list/product-list.page').then(
        m => m.ProductListPage
      ),
  },
  {
    path: 'category-details',
    loadComponent: () =>
      import('./category-details/category-details.page').then(
        m => m.CategoryDetailsPage
      ),
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./product-details/product-details.page').then(
        m => m.ProductDetailsPage
      ),
  },

  // Main app wrapper
  {
    path: 'main-app',
    loadComponent: () =>
      import('./main-app/main-app.page').then(m => m.MainAppPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./main-app/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'my-account',
        loadChildren: () =>
          import('./main-app/my-account/my-account.routes').then(
            m => m.MY_ACCOUNT_ROUTES
          ),
      },
      {
        path: 'my-purchases',
        loadChildren: () =>
          import('./main-app/my-purchases/my-purchases.routes').then(
            m => m.MY_PURCHASES_ROUTES
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },

  // Global fallback → login
  { path: '**', redirectTo: 'login' },
];
