import {Component} from '@angular/core';

import {StepperService} from '../../providers/stepper/stepper.service';

@Component({
  selector: 'app-service-choice',
  templateUrl: './service-choice.component.html',
  styleUrls: ['./service-choice.component.scss'],
})
export class ServiceChoiceComponent {
  constructor(private stepperService: StepperService) {}

  go(): void {
    this.stepperService.go();
  }

  back(): void {
    this.stepperService.back();
  }
}
