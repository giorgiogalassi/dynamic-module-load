import {Injectable} from '@angular/core';

import {Distributors} from '@models';

@Injectable()
export class ModuleLoaderService {
  private _modulesMap = new Map<Distributors, Promise<any> | undefined>([
    [Distributors.Huk, undefined],
    [Distributors.Lvm, undefined],
    [Distributors.Onpier, undefined],
  ]);

  constructor() {}

  setModule(distributor: Distributors): void {
    if (this._modulesMap.has(distributor) && distributor === Distributors.Huk) {
      this._modulesMap.set(
        distributor,
        import('../../../distributors/huk/huk.module').then((m) => m.HukModule)
      );
    }

    if (this._modulesMap.has(distributor) && distributor === Distributors.Lvm) {
      this._modulesMap.set(
        distributor,
        import('../../../distributors/lvm/lvm.module').then((m) => m.LvmModule)
      );
    }

    if (this._modulesMap.has(distributor) && distributor === Distributors.Onpier) {
      this._modulesMap.set(
        distributor,
        import('../../../distributors/onpier/onpier.module').then((m) => m.OnpierModule)
      );
    }
  }

  getModule(distributor: Distributors): Promise<any> | undefined {
    if (this._modulesMap.has(distributor)) return this._modulesMap.get(distributor);

    return undefined;
  }

  /* 
  async getModule(distributor: Distributors): Promise<any> {
    if (this._modulesMap.has(distributor)) {
      const module = this._modulesMap.get(distributor) as string;

      return import(
        `../../../distributors/${distributor}/${distributor}.module`
      ).then(() => module);
    }

    return import(`../../../distributors/onpier/onpier.module`).then(
      (m) => m.OnpierModule
    );
  } 
  */
}
