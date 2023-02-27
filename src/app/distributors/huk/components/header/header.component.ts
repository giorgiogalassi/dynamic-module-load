import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'huk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public text: string = 'Default';
  @Output() public clickEmitter: EventEmitter<void> = new EventEmitter();
}
