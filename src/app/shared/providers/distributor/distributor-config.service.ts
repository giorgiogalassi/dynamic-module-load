import {DistributorFeaturs} from '@models';
import {IConfigService} from '@services';

export abstract class DistributorConfigService implements IConfigService {
  abstract getDistributorFeatures(): DistributorFeaturs[];
  abstract getDistributorNavigation(): string[];
  abstract hasLandingPage(): boolean;
}
