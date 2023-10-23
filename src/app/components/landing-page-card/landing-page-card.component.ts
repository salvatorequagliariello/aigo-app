import { Component, Input } from '@angular/core';
import { ModelLinkObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-landing-page-card',
  templateUrl: './landing-page-card.component.html',
  styleUrls: ['./landing-page-card.component.scss']
})
export class LandingPageCardComponent {
  @Input({ required: true }) modelLink!: ModelLinkObj
}
