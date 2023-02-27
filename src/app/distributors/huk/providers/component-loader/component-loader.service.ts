import {Injectable, ViewContainerRef} from '@angular/core';

import {ComponentLoaderBaseService} from '../../../../shared/providers/component-loader/component-loader.service';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';

@Injectable()
export class HukComponentLoaderService extends ComponentLoaderBaseService {
  constructor() {
    super();
  }

  loadFooterComponent(vcr: ViewContainerRef): void {
    this.loadComponent(vcr, FooterComponent);
  }

  loadHeaderComponent(vcr: ViewContainerRef): void {
    this.loadComponent(vcr, HeaderComponent);
  }
}
