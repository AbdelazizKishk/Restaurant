import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.component').then((m) => m.MenuComponent),
    title: 'Menu',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
    title: 'Services',
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./pages/offers/offers.component').then((m) => m.OffersComponent),
    title: 'Offers',
  },
  {
    path: 'meal/:mealName',
    loadComponent: () =>
      import('./pages/meal/meal.component').then((m) => m.MealComponent),
    title: 'meal',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
    title: 'Error',
  },
];
