import {Injectable} from '@angular/core';
import {NavigationEnd} from '@angular/router';

import {ConfigService, DistributorBaseService, NavigationService} from '@services';
import {filter, take} from 'rxjs';

export interface Step {
  path: string;
  isCurrentStep: boolean;
}

@Injectable()
export class StepperService {
  private _steps: Step[] = [];

  constructor(
    private navigationService: NavigationService,
    private distributorBaseService: DistributorBaseService,
    private configService: ConfigService
  ) {
    this.navigationService
      .listenForRouterEvents()
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe((event) => {
        this.setDistributorSteps();
        this.setCurrentStepByUrl((event as NavigationEnd).urlAfterRedirects);
      });
  }

  getCurrentStep(): Step {
    return this._steps.find((step) => step.isCurrentStep)!;
  }

  setSteps(steps: string[]): void {
    this._steps = steps.map((step) => ({
      path: step,
      isCurrentStep: false,
    }));
  }

  go(): void {
    this.navigationService.go(this.getNextStepPath());
  }

  goToLandingIfPossible(): void {
    if (this.configService.hasLandingPage()) this.navigationService.go('/landing');
  }

  back(): void {
    this.navigationService.go(this.getPreviousStepPath());
  }

  private getNextStepPath(): string {
    const currentStepIndex = this.getCurrentStepIndex();
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex <= this._steps.length - 1) {
      this._steps[currentStepIndex].isCurrentStep = false;
      this._steps[nextStepIndex].isCurrentStep = true;

      return this._steps[nextStepIndex].path;
    }

    return this._steps[currentStepIndex].path;
  }

  private getPreviousStepPath(): string {
    const currentStepIndex = this.getCurrentStepIndex();
    const previousStepIndex = currentStepIndex - 1;

    if (previousStepIndex >= 0) {
      this._steps[currentStepIndex].isCurrentStep = false;
      this._steps[previousStepIndex].isCurrentStep = true;

      return this._steps[previousStepIndex].path;
    }

    return this._steps[currentStepIndex].path;
  }

  private setDistributorSteps(): void {
    const navigation = this.distributorBaseService.getDistributorNavigation();
    this.setSteps(navigation);
  }

  private setCurrentStepByUrl(url: string = '') {
    const stepIndex = this._steps.findIndex((step) => step.path === url);

    if (stepIndex > 0) this._steps[stepIndex].isCurrentStep = true;
    else this._steps[0].isCurrentStep = true;
  }

  private getCurrentStepIndex(): number {
    const index = this._steps.findIndex((step) => step.isCurrentStep);
    return index > -1 ? index : 0;
  }
}
