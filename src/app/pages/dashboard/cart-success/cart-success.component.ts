import { Component, OnInit } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.scss']
})
export class CartSuccessComponent implements OnInit {

  constructor(private userTk: ManageUserTokensService) {}

  async ngOnInit(): Promise<void> {
    this.userTk.checkUser();
    await this.userTk.confirmPayment();  
  }
}
