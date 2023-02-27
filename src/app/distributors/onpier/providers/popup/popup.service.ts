import {Injectable} from '@angular/core';

import {PopupBaseService} from '../../../../shared/providers/popup/popup-base.service';

@Injectable()
export class OnpierPopupService extends PopupBaseService {
  constructor() {
    super();
  }

  start(): void {
    this.openWelcomePopup();
  }

  next(): void {
    console.log('Next from Onpier - PopupService!');
  }

  shouldOpenCookieConsent(): boolean {
    throw new Error('Method not implemented.');
  }

  shouldOpenWelcomePopup(): boolean {
    throw new Error('Method not implemented.');
  }

  shouldOpenBirthdayPopup(): boolean {
    throw new Error('Method not implemented.');
  }
}
