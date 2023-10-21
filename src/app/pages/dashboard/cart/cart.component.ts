import { Component, OnInit } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconObj, PackObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartForm!: FormGroup
  packs: PackObj[] = [
    {
      id: 'bronze',
      value: 'price_1O2FgpEtgAmqoL03xjzzFSfQ',
      price: "$ 9.99",
      name: "Bronze Pack",
      tokens: 200,
      imageUrl: "assets/undraw_content_team_re_6rlg.svg"
    },
    {
      id: 'silver',
      value: 'price_1O2FhkEtgAmqoL03G2IQu3yt',
      price: "$ 19.99",
      name: "Silver Pack",
      tokens: 500,
      imageUrl: "assets/undraw_artificial_intelligence_re_enpp.svg"
    },
    {
      id: 'gold',
      value: 'price_1O2FiTEtgAmqoL037TmEB6SP',
      price: "$ 49.99",
      name: "Gold Pack",
      tokens: 1200,
      imageUrl: "assets/undraw_surveillance_re_8tkl.svg"
    }
  ]

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

  print(value: string) {
    console.log(value)
  }

  cartIcon: IconObj = {
    pathOne: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
  }
}
