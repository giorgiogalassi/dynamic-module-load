import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { ComponentLoaderBaseService } from '../../../shared/providers/component-loader/component-loader.service';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Injectable()
export class ComponentLoaderService extends ComponentLoaderBaseService {
  constructor() {
    super();
  }

  loadFooterComponent(vcr: ViewContainerRef): ComponentRef<FooterComponent> {
    return this.loadComponent(vcr, FooterComponent);
  }

  loadHeaderComponent(vcr: ViewContainerRef): ComponentRef<HeaderComponent> {
    const compRef = this.loadComponent(vcr, HeaderComponent);
    const compInstance = compRef.instance;
    
    compInstance.text = 'Works!';

    return compRef;
  }
}
