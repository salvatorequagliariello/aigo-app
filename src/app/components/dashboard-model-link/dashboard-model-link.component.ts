import { Component, Input } from '@angular/core';
import { ModelLinkObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-dashboard-model-link',
  templateUrl: './dashboard-model-link.component.html',
  styleUrls: ['./dashboard-model-link.component.scss']
})
export class DashboardModelLinkComponent {
  @Input({ required: true }) modelLink!: ModelLinkObj
}
