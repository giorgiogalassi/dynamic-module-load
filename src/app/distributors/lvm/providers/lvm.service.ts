import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Distributors} from '@models';
import {DistributorConfigService} from '@services';
import {DistributorBaseService} from '../../../shared/providers/distributor/distributor-base.service';

@Injectable()
export class LvmService extends DistributorBaseService {
  constructor(private route: ActivatedRoute, private config: DistributorConfigService) {
    super(config);
  }

  init(): void {
    console.log('--- LvmService - init ---');
    console.log(this.config.getDistributorFeatures());
    console.log(this.route.snapshot.queryParamMap);
  }

  getDistributorInfo(): Distributors {
    return Distributors.Lvm;
  }
}
