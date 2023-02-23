import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Distributors } from '../../../shared/models/enums/distributors.enum';
import { DistributorConfigService } from '../../../shared/providers/config/distributor-config.service';
import { DistributorBaseService } from '../../../shared/providers/distributor/distributor-base.service';

@Injectable()
export class OnpierService extends DistributorBaseService {
  constructor(
    router: Router,
    private route: ActivatedRoute,
    private config: DistributorConfigService
  ) {
    super(router);
  }

  init(): void {
    console.log('--- OnpierService - init ---');
    console.table(this.config.getDistributorFeatures());
    console.table(this.route.snapshot.queryParamMap);
  }

  getDistributorInfo(): Distributors {
    return Distributors.Onpier;
  }

  override navigate(): void {
    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
  }
}
