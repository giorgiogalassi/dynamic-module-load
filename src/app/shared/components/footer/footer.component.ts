import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() public goEmitter: EventEmitter<void> = new EventEmitter();
  @Output() public backEmitter: EventEmitter<void> = new EventEmitter();
}
