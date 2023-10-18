import { Component, Input } from '@angular/core';
import { IconObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-ai-header',
  templateUrl: './ai-header.component.html',
  styleUrls: ['./ai-header.component.scss']
})
export class AiHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: IconObj;
}
