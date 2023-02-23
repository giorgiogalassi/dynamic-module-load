import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import {
  Config,
  DistributorFeaturs,
} from '../../models/config/config.interface';
import { Distributors } from '../../models/enums/distributors.enum';
import { IConfigService } from './config.service.interface';

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

  getDistributorFeatures(): DistributorFeaturs[] {
    return this._config.features;
  }
}
