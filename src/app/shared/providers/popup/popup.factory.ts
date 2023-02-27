import {OnpierPopupService} from '@distributors/onpier';

import {Distributors} from '@models';
import {ConfigService} from '@services';

type PopupServices = OnpierPopupService;

export function popupFactory(config: ConfigService) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, PopupServices>([]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierPopupService();
}
