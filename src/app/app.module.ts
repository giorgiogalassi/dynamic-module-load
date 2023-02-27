import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {
  ComponentLoaderBaseService,
  componentLoaderFactory,
  configFactory,
  ConfigService,
  DistributorBaseService,
  DistributorConfigService,
  distributorFactory,
  ModuleLoaderService,
  NavigationService,
  PopupBaseService,
  popupFactory,
  StepperService,
} from '@services';

import {
  KnownUserComponent,
  LandingComponent,
  RegistrationComponent,
  ServiceChoiceComponent,
  SummaryComponent,
} from '@pages';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';

import {FooterDynamicDirective} from './shared/directives/footer-dynamic.directive';
import {HeaderDynamicDirective} from './shared/directives/header-dynamic.directive';

const components = [FooterComponent, HeaderComponent];
const directives = [FooterDynamicDirective, HeaderDynamicDirective];
const pages = [
  KnownUserComponent,
  LandingComponent,
  RegistrationComponent,
  ServiceChoiceComponent,
  SummaryComponent,
];

@NgModule({
  declarations: [AppComponent, ...components, ...directives, ...pages],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    ConfigService,
    ModuleLoaderService,
    StepperService,
    NavigationService,
    {provide: DistributorConfigService, useExisting: ConfigService},
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: DistributorBaseService,
      useFactory: distributorFactory,
      deps: [ActivatedRoute, ConfigService],
    },
    {
      provide: PopupBaseService,
      useFactory: popupFactory,
      deps: [ConfigService],
    },
    {
      provide: ComponentLoaderBaseService,
      useFactory: componentLoaderFactory,
      deps: [ConfigService, StepperService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
