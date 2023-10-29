import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Alert {
	type: string;
	message: string;
}

@Component({
  selector: 'aigo-generation-error-alert',
  templateUrl: './generation-error-alert.component.html',
  styleUrls: ['./generation-error-alert.component.scss']
})
export class GenerationErrorAlertComponent {
  @Input({ required: true }) open!: boolean
  @Output() newItemEvent = new EventEmitter<boolean>();

  
  constructor() {}
  
  closeAlert() {
    this.newItemEvent.emit(!this.open);
  }
}
