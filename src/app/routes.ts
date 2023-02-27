import {Routes} from '@angular/router';

import {
  KnownUserComponent,
  LandingComponent,
  RegistrationComponent,
  ServiceChoiceComponent,
  SummaryComponent,
} from '@pages';

export const routes: Routes = [
  {
    path: '',
    component: ServiceChoiceComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'known-user',
    component: KnownUserComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];
