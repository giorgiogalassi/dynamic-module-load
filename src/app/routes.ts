import { Routes } from '@angular/router';

import { HomeComponent } from './shared/pages/home/home.component';
import { RootComponent } from './shared/pages/root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
