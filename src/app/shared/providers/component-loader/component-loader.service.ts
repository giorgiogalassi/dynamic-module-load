import { ComponentRef, Type, ViewContainerRef } from '@angular/core';
import { ComponentLoader } from '../../models/interfaces/component-loader.interface';

export abstract class ComponentLoaderBaseService implements ComponentLoader {
  constructor() {}

  abstract loadFooterComponent(vcr: ViewContainerRef): ComponentRef<unknown> ;
  abstract loadHeaderComponent(vcr: ViewContainerRef): ComponentRef<unknown>;

  protected loadComponent<T>(
    vcr: ViewContainerRef,
    component: Type<T>
  ): ComponentRef<T> {
    vcr.clear();
    return vcr.createComponent<T>(component);
  }
}
