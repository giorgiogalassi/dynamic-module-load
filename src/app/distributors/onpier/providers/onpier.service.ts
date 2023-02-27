import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Distributors} from '@models';
import {DistributorConfigService} from '@services';
import {DistributorBaseService} from '../../../shared/providers/distributor/distributor-base.service';

@Injectable()
export class OnpierService extends DistributorBaseService {
  constructor(private route: ActivatedRoute, private config: DistributorConfigService) {
    super(config);
  }

  init(): void {
    console.log('--- OnpierService - init ---');
    console.table(this.config.getDistributorFeatures());
    console.table(this.route.snapshot.queryParamMap);
  }

  getDistributorInfo(): Distributors {
    return Distributors.Onpier;
  }
}
