import {HukComponentLoaderService} from '@distributors/huk';
import {OnpierComponentLoaderService} from '@distributors/onpier';

import {Distributors} from '@models';
import {ConfigService, StepperService} from '@services';

type ComponentLoadersServices = OnpierComponentLoaderService | HukComponentLoaderService;

export function componentLoaderFactory(config: ConfigService, stepperBaseService: StepperService) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, ComponentLoadersServices>([
    [Distributors.Huk, new HukComponentLoaderService()],
  ]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierComponentLoaderService(stepperBaseService);
}
