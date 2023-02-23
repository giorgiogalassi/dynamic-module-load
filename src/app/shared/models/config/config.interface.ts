import { Distributors } from '../../../shared/models/enums/distributors.enum';

export interface DistributorFeaturs {
  name: string;
  isActive: boolean;
}

export interface Config {
  distributor: Distributors;
  features: DistributorFeaturs[];
}
