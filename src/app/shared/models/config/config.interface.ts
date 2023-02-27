import {Distributors} from '@models';

export interface DistributorFeaturs {
  name: string;
  path: string;
  isActive: boolean;
}

export interface Config {
  distributor: Distributors;
  features: DistributorFeaturs[];
}
