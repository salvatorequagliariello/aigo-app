import { Component } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';

@Component({
  selector: 'aigo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private stripe: StripeService) {}

  async onSubmit() {
    await this.stripe.getPayment();
  }
}
