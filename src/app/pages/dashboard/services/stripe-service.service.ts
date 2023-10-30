import { Injectable, OnInit } from '@angular/core';
import {Stripe, loadStripe} from '@stripe/stripe-js';
import { PackObj} from 'src/app/models/interfaces';
import { ManageUserTokensService } from './manage-user-tokens.service';

@Injectable({
  providedIn: 'root'
})
export class StripeService implements OnInit {
  stripe!: Stripe | null

  constructor() { }

  ngOnInit(): void {
  }
  
  async getPayment(pack: PackObj) {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);

    try {
      const paymentResponse = await this.stripe?.redirectToCheckout({
        lineItems: [{
          price: pack.value,
          quantity: 1
        }],
        mode: 'payment',
        successUrl: 'https://aigo-ai.vercel.app/dashboard/cart/checkout-success',
        cancelUrl: 'https://aigo-ai.vercel.app/dashboard/cart/checkout-error'
      });

    } catch (error) {
      console.log(error);
    }
  }
}
