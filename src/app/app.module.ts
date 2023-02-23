import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterDynamicDirective } from './shared/directives/footer-dynamic.directive';
import { HeaderDynamicDirective } from './shared/directives/header-dynamic.directive';
import { HomeComponent } from './shared/pages/home/home.component';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { componentLoaderFactory } from './shared/providers/component-loader/component-loader.factory';
import { ComponentLoaderBaseService } from './shared/providers/component-loader/component-loader.service';
import { configFactory } from './shared/providers/config/config-factory.service';
import { ConfigService } from './shared/providers/config/config.service';
import { DistributorConfigService } from './shared/providers/config/distributor-config.service';
import { DistributorBaseService } from './shared/providers/distributor/distributor-base.service';
import { distributorFactory } from './shared/providers/distributor/distributor.factory';
import { ModuleLoaderService } from './shared/providers/module-loader/module-loader.service';
import { PopupBaseService } from './shared/providers/popup/popup-base.service';
import { popupFactory } from './shared/providers/popup/popup.factory';
import { RootComponent } from './shared/pages/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    FooterDynamicDirective,
    HeaderDynamicDirective,
    RootComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    ConfigService,
    ModuleLoaderService,
    { provide: DistributorConfigService, useExisting: ConfigService },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: DistributorBaseService,
      useFactory: distributorFactory,
      deps: [Router, ActivatedRoute, ConfigService],
    },
    {
      provide: PopupBaseService,
      useFactory: popupFactory,
      deps: [ConfigService],
    },
    {
      provide: ComponentLoaderBaseService,
      useFactory: componentLoaderFactory,
      deps: [ConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
