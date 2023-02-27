import {DistributorFeaturs} from '@models';

export interface IConfigService {
  getDistributorFeatures: () => DistributorFeaturs[];
  getDistributorNavigation: () => string[];
  hasLandingPage: () => boolean;
}
