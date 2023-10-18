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
          price: pack,
          quantity: 1
        }],
        mode: 'payment',
        successUrl: 'http://localhost:4200/dashboard/checkout-success',
        cancelUrl: 'http://localhost:4200/dashboard/checkout-failure'
      });

    } catch (error) {
      console.log(error);
    }
  }

  async checkPayment() {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);
  }
}
