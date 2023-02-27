import {Component} from '@angular/core';

import {StepperService} from '@services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private stepperService: StepperService) {}

  go(): void {
    this.stepperService.go();
  }

  back(): void {
    this.stepperService.back();
  }
}
