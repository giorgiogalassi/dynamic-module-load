import {ActivatedRoute} from '@angular/router';

import {HukService} from '@distributors/huk';
import {LvmService} from '@distributors/lvm';
import {OnpierService} from '@distributors/onpier';
import {Distributors} from '@models';
import {ConfigService} from '@services';

type DistributorsServices = HukService | LvmService | OnpierService;

export function distributorFactory(route: ActivatedRoute, config: ConfigService) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, DistributorsServices>([
    [Distributors.Huk, new HukService(route, config)],
    [Distributors.Lvm, new LvmService(route, config)],
  ]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierService(route, config);
}
