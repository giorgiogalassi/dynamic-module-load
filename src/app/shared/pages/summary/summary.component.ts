import {Component} from '@angular/core';

import {StepperService} from '@services';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(private stepperService: StepperService) {}

  go(): void {
    this.stepperService.go();
  }

  back(): void {
    this.stepperService.back();
  }
}
