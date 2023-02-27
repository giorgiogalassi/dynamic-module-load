import {Distributors} from '@models';

export interface Distributor {
  init: () => void;
  getDistributorInfo: () => Distributors;
  getDistributorNavigation: () => string[];
  go?: () => void;
  back?: () => void;
}
