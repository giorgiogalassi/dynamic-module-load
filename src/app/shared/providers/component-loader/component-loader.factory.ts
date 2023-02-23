import { ComponentLoaderService as OnpierComponentLoaderService } from '../../../distributors/onpier/providers/component-loader.service';
import { ComponentLoaderService as HukComponentLoaderService } from '../../../distributors/huk/providers/component-loader.service';
import { Distributors } from '../../models/enums/distributors.enum';
import { ConfigService } from '../config/config.service';

type PopupServices = OnpierComponentLoaderService;

export function componentLoaderFactory(config: ConfigService) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, PopupServices>([
    [Distributors.Huk, new HukComponentLoaderService()],
  ]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierComponentLoaderService();
}
