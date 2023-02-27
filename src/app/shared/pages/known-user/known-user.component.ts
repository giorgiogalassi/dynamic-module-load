import {Component} from '@angular/core';

import {StepperService} from '@services';

@Component({
  selector: 'app-known-user',
  templateUrl: './known-user.component.html',
  styleUrls: ['./known-user.component.scss'],
})
export class KnownUserComponent {
  constructor(private stepperService: StepperService) {}

  go(): void {
    this.stepperService.go();
  }

  back(): void {
    this.stepperService.back();
  }
}
