
import { PopupService as OnpierPopupService } from '../../../distributors/onpier/providers/popup.service';
import { Distributors } from '../../models/enums/distributors.enum';
import { ConfigService } from '../config/config.service';

type PopupServices = OnpierPopupService;

export function popupFactory(config: ConfigService) {
  const distributor = config.getDistributor();

  const distributorMap = new Map<Distributors, PopupServices>([]);

  if (distributorMap.has(distributor)) return distributorMap.get(distributor);
  return new OnpierPopupService();
}
