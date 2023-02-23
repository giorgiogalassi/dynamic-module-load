import { ActivatedRoute, Router } from '@angular/router';

import { HukService } from '../../../distributors/huk/providers/huk.service';
import { LvmService } from '../../../distributors/lvm/providers/lvm.service';
import { OnpierService } from '../../../distributors/onpier/providers/onpier.service';
import { Distributors } from '../../models/enums/distributors.enum';
import { ConfigService } from '../config/config.service';

type DistributorsServices = HukService | LvmService | OnpierService;

export function distributorFactory(
  router: Router,
  route: ActivatedRoute,
  config: ConfigService
) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, DistributorsServices>([
    [Distributors.Huk, new HukService(router, route, config)],
    [Distributors.Lvm, new LvmService(router, route, config)],
  ]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierService(router, route, config);
}
