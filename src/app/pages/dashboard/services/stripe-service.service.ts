import { Injectable, OnInit } from '@angular/core';
import {Stripe, loadStripe} from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService implements OnInit {
  stripe!: Stripe | null
  constructor() { }

  ngOnInit(): void {
  }
  
  async getPayment(pack: string) {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);

    try {
      const paymentResponse = await this.stripe?.redirectToCheckout({
        lineItems: [{
          price: 'price_1O2FgpEtgAmqoL03xjzzFSfQ',
          quantity: 1
        }],
        mode: 'payment',
        successUrl: 'http://localhost:4200/dashboard/cart',
        cancelUrl: 'http://localhost:4200/dashboard/cart'
      });

    } catch (error) {
      console.log(error);
    }

  }
}
