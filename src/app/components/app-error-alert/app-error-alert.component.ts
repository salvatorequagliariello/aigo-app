import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aigo-app-error-alert',
  templateUrl: './app-error-alert.component.html',
  styleUrls: ['./app-error-alert.component.scss']
})
export class AppErrorAlertComponent {
  @Input({ required: true }) open!: boolean
  @Output() newItemEvent = new EventEmitter<boolean>();

  
  constructor() {}
  
  closeAlert() {
    this.newItemEvent.emit(!this.open);
  }
}
