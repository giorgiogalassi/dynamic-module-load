import { DistributorFeaturs } from '../../models/config/config.interface';

export interface IConfigService {
  getDistributorFeatures: () => DistributorFeaturs[];
}
