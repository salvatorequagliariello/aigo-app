import { Component, Input } from '@angular/core';

@Component({
  selector: 'aigo-empty-generation',
  templateUrl: './empty-generation.component.html',
  styleUrls: ['./empty-generation.component.scss']
})
export class EmptyGenerationComponent {
  @Input({ required: true }) message!: string;
  @Input({ required: true }) imageUrl!: string;
}
