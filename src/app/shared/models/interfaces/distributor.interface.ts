import { Distributors } from '../../../shared/models/enums/distributors.enum';

export interface Distributor {
  init: () => void;
  getDistributorInfo: () => Distributors;
  navigate?: () => void;
}
