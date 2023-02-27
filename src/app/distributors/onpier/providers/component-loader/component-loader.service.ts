import {Injectable, ViewContainerRef} from '@angular/core';

import {StepperService} from '@services';

import {ComponentLoaderBaseService} from '../../../../shared/providers/component-loader/component-loader.service';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';

@Injectable()
export class OnpierComponentLoaderService extends ComponentLoaderBaseService {
  constructor(private stepperService: StepperService) {
    super();
  }

  loadFooterComponent(vcr: ViewContainerRef): void {
    const compRef = this.loadComponent(vcr, FooterComponent);
    const compInstance = compRef.instance;

    compInstance.backEmitter.subscribe(() => this.stepperService.back());
    compInstance.goEmitter.subscribe(() => this.stepperService.go());
  }

  loadHeaderComponent(vcr: ViewContainerRef): void {
    this.loadComponent(vcr, HeaderComponent);
  }
}
