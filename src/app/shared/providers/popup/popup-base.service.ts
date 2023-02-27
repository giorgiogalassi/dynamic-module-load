export abstract class PopupBaseService {
  constructor() {}

  abstract start(): void;
  abstract next(): void;

  abstract shouldOpenCookieConsent(): boolean;
  abstract shouldOpenWelcomePopup(): boolean;
  abstract shouldOpenBirthdayPopup(): boolean;

  protected openCookiePopup(): void {
    console.log('Opening Cookie Consent popup!');
  }

  protected openWelcomePopup(): void {
    console.log('Opening Welcome popup!');
  }

  protected openBirthDayPopup(): void {
    console.log('Opening Birthday popup!');
  }
}
