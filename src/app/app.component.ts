import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs';

import { FooterDynamicDirective } from './shared/directives/footer-dynamic.directive';
import { ConfigService } from './shared/providers/config/config.service';
import { DistributorBaseService } from './shared/providers/distributor/distributor-base.service';
import { ModuleLoaderService } from './shared/providers/module-loader/module-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FooterDynamicDirective, { static: true })
  dynamicComponent!: FooterDynamicDirective;

  constructor(
    private moduleLoadeService: ModuleLoaderService,
    private distributorService: DistributorBaseService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const distributor = this.configService.getDistributor();
    this.moduleLoadeService.setModule(distributor);

    const module = this.moduleLoadeService.getModule(distributor);

    if (module) {
      const config = this.router.config;

      config.push({
        path: '',
        loadChildren: () => module,
      });

      this.router.resetConfig(config);

      /* this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => this.distributorService.init()); */

      console.info(
        `%cLOADING ${distributor.toUpperCase()}...`,
        'font-size: xx-large'
      );
    }
  }
}
