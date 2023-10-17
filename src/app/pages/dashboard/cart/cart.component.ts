import { Component, OnInit } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PackObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartForm!: FormGroup
  packs!: PackObj[]

  constructor(private stripe: StripeService) {}

  ngOnInit(): void {
    this.cartForm = new FormGroup({
      packInput: new FormControl('', Validators.required)
    }) 
  }

  async onSubmit() {    
    if (this.cartForm.valid) {
      await this.stripe.getPayment(this.cartForm.value.packInput);
      this.cartForm.reset(this.cartForm);
    };
  }
}
