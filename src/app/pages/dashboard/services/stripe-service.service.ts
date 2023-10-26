import { Injectable, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {Stripe, loadStripe} from '@stripe/stripe-js';
import { PackObj, PaymentObj } from 'src/app/models/interfaces';
import { ManageUserTokensService } from './manage-user-tokens.service';

@Injectable({
  providedIn: 'root'
})
export class StripeService implements OnInit {
  stripe!: Stripe | null

  constructor( private userTk: ManageUserTokensService ) { }

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
        successUrl: 'http://localhost:4200/dashboard/cart/checkout-success',
        cancelUrl: 'http://localhost:4200/dashboard/cart/checkout-error'
      });

    } catch (error) {
      console.log(error);
    }
  }

  async checkPayment() {

  }
}
