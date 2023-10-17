import { Injectable, OnInit } from '@angular/core';
import {Stripe, loadStripe} from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService implements OnInit {
  stripe!: Stripe | null
  constructor() { }

  async ngOnInit(): Promise<void> {
  }
  
  async getPayment() {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);
    this.stripe?.redirectToCheckout({
      lineItems: [{
        price: 'price_1O2FgpEtgAmqoL03xjzzFSfQ',
        quantity: 1
      }],
      mode: 'payment',
      successUrl: 'http://localhost:4200/dashboard/cart',
      cancelUrl: 'http://localhost:4200/dashboard/cart'
    }).then(response => console.log(response))
  }
}
