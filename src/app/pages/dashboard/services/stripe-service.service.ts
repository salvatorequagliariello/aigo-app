import { Injectable, OnInit } from '@angular/core';
import {Stripe, loadStripe} from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeServiceService implements OnInit {
  stripe!: Stripe | null
  constructor() { }

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe(import.meta.env.NG_APP_STRIPE_KEY);
  }
}
