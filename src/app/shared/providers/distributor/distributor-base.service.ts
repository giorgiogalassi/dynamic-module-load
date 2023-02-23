import { Router } from '@angular/router';

import { Distributors } from '../../models/enums/distributors.enum';
import { Distributor } from '../../models/interfaces/distributor.interface';

export abstract class DistributorBaseService implements Distributor {
  constructor(protected router: Router) {}

  abstract init(): void;
  abstract getDistributorInfo(): Distributors;

  navigate() {
    console.info('--- DistributorBaseService ---');
    this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
  }
}
