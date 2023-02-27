import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';

import {Config, DistributorFeaturs, Distributors} from '@models';
import {IConfigService} from '@services';

@Injectable()
export class ConfigService implements IConfigService {
  get config(): Config {
    return this._config;
  }

  private _config: Config = {
    distributor: Distributors.Onpier,
    features: [
      {
        name: 'landingPage',
        path: '/landing',
        isActive: false,
      },
      {
        name: 'step1',
        path: '',
        isActive: true,
      },
      {
        name: 'step2',
        path: '/registration',
        isActive: true,
      },
      {
        name: 'step3',
        path: '/known-user',
        isActive: true,
      },
      {
        name: 'step4',
        path: '/summary',
        isActive: true,
      },
    ],
  };

  constructor() {}

  getConfig(): Observable<Config> {
    console.info(`Getting config for ${this.getDistributor()}...`);
    return of(this._config).pipe(delay(1000));
  }

  getDistributor(): Distributors {
    return this._config.distributor;
  }

  getDistributorNavigation(): string[] {
    return this._config.features.filter((feuature) => feuature.isActive).map(({path}) => path);
  }

  getDistributorFeatures(): DistributorFeaturs[] {
    return this._config.features;
  }

  hasLandingPage(): boolean {
    return (
      this.getDistributorFeatures().find((feature) => feature.name === 'landingPage')?.isActive ||
      false
    );
  }
}
