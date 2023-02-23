export abstract class PopupBaseService {
  constructor() {}

  abstract start(): void;
  abstract next(): void;

  protected abstract shouldOpenCookieConsent(): boolean;
  protected abstract shouldOpenWelcomePopup(): boolean;
  protected abstract shouldOpenBirthdayPopup(): boolean;

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
