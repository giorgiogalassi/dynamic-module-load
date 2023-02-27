import {ComponentRef, Type, ViewContainerRef} from '@angular/core';
import {ComponentLoader} from '@models';

export abstract class ComponentLoaderBaseService implements ComponentLoader {
  constructor() {}

  abstract loadFooterComponent(vcr: ViewContainerRef): void;
  abstract loadHeaderComponent(vcr: ViewContainerRef): void;

  protected loadComponent<T>(vcr: ViewContainerRef, component: Type<T>): ComponentRef<T> {
    vcr.clear();
    return vcr.createComponent<T>(component);
  }
}
