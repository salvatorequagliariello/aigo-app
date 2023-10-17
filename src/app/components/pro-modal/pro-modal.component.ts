import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aigo-pro-modal',
  templateUrl: './pro-modal.component.html',
  styleUrls: ['./pro-modal.component.scss']
})
export class ProModalComponent {

  constructor(private modalService: NgbModal) {}

  @Input() modal: any;

}
