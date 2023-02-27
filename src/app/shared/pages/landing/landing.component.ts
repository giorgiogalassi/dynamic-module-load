import {Component} from '@angular/core';

import {StepperService} from '@services';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private stepperService: StepperService) {}

  go(): void {
    this.stepperService.go();
  }

  back(): void {
    this.stepperService.back();
  }
}
