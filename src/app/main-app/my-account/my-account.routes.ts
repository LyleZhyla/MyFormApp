import { Routes } from '@angular/router';
import { MyAccountPage } from './my-account.page';

export const MY_ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: MyAccountPage,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'banks-and-cards',
        loadComponent: () =>
          import('./banks-and-cards/banks-and-cards.page').then(
            (m) => m.BanksAndCardsPage
          ),
      },
      {
        path: 'addresses',
        loadComponent: () =>
          import('./addresses/addresses.page').then((m) => m.AddressesPage),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./change-password/change-password.page').then(
            (m) => m.ChangePasswordPage
          ),
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
    ],
  },
];
