import { Component } from '@angular/core';

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

  constructor() {}

}
