import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {
  ConfigService,
  DistributorBaseService,
  ModuleLoaderService,
  StepperService,
} from '@services';

import {FooterDynamicDirective} from './shared/directives/footer-dynamic.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FooterDynamicDirective, {static: true})
  dynamicComponent!: FooterDynamicDirective;

  constructor(
    private moduleLoadeService: ModuleLoaderService,
    private distributorService: DistributorBaseService,
    private stepperService: StepperService,
    private configService: ConfigService,
    private route: ActivatedRoute,
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
      this.route.queryParamMap.subscribe((params) => {
        this.stepperService.goToLandingIfPossible();

        if (params.keys.length > 0) this.distributorService.init();
      });

      console.info(
        `%cLOADING ${this.distributorService.getDistributorInfo().toUpperCase()}...`,
        'font-size: xx-large'
      );
    }
  }
}
