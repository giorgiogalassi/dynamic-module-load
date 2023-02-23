import { ComponentRef, ViewContainerRef } from '@angular/core';

export interface ComponentLoader {
  loadFooterComponent(vcr: ViewContainerRef): ComponentRef<unknown> | null;
  loadHeaderComponent(vcr: ViewContainerRef): ComponentRef<unknown> | null;
}
