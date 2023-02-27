import {ComponentRef, ViewContainerRef} from '@angular/core';

export interface ComponentLoader {
  loadFooterComponent(vcr: ViewContainerRef): void;
  loadHeaderComponent(vcr: ViewContainerRef): void;
}
