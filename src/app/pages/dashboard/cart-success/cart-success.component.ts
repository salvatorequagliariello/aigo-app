import { Component, OnInit } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';

@Component({
  selector: 'aigo-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.scss']
})
export class CartSuccessComponent implements OnInit {

  constructor(private stripe: StripeService) {}

  ngOnInit(): void {
   this.stripe.checkPayment();   
  }
}
