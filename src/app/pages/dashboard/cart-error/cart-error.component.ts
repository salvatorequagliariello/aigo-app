import { Component, OnInit } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-cart-error',
  templateUrl: './cart-error.component.html',
  styleUrls: ['./cart-error.component.scss']
})
export class CartErrorComponent implements OnInit {

  constructor(private userTk: ManageUserTokensService) {}

  ngOnInit(): void {
    this.userTk.checkUser();
  }
}
