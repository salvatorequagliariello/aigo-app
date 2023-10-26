import { Component, OnInit } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.scss']
})
export class CartSuccessComponent implements OnInit {

  constructor(private stripe: StripeService, private userTk: ManageUserTokensService) {}

  async ngOnInit(): Promise<void> {
  this.userTk.checkUser();
  await this.stripe.checkPayment();   
  }
}
