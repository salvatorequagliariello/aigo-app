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
  lastPayment: PaymentObj = {
    madeBy: null,
    amountOfTokens: null
  }

  constructor( private userTk: ManageUserTokensService ) { }

  ngOnInit(): void {
  }
  
  async getPayment(pack: PackObj) {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);

    try {
      this.lastPayment = {
        madeBy: this.userTk.user.name,
        amountOfTokens: pack.tokens
      };

      const paymentResponse = await this.stripe?.redirectToCheckout({
        lineItems: [{
          price: pack.value,
          quantity: 1
        }],
        mode: 'payment',
        successUrl: 'http://localhost:4200/dashboard/cart/checkout-success',
        cancelUrl: 'http://localhost:4200/dashboard/cart/checkout-failure'
      });

    } catch (error) {
      console.log(error);
    }
  }

  async checkPayment() {
    console.log("weeeee", this.lastPayment.amountOfTokens);
    if (this.lastPayment.amountOfTokens && this.userTk.user.name === this.lastPayment.madeBy) {
      try {
        await this.userTk.updateUserTokens(this.lastPayment.amountOfTokens);
      } catch (error) {
        console.log(error);
      };

      this.lastPayment.amountOfTokens = null;
      this.lastPayment.madeBy = null;
    };
  }
}
