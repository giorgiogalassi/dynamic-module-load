import { DistributorFeaturs } from '../../models/config/config.interface';
import { IConfigService } from './config.service.interface';

export abstract class DistributorConfigService implements IConfigService {
  abstract getDistributorFeatures(): DistributorFeaturs[];
}
