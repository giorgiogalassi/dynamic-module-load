import {Distributor, Distributors} from '@models';
import {DistributorConfigService} from '@services';

export abstract class DistributorBaseService implements Distributor {
  constructor(private configService: DistributorConfigService) {}

  abstract init(): void;
  abstract getDistributorInfo(): Distributors;

  getDistributorNavigation(): string[] {
    return this.configService.getDistributorNavigation();
  }
}
