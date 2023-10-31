import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.scss']
})
export class CartSuccessComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor(private userTk: ManageUserTokensService) {}

  ngOnInit(): void {
    this.userTk.checkUser();
    this.userTk.confirmPayment();  
  }
  
  async ngAfterContentInit(): Promise<void> {
    // await this.userTk.cleanPayment();
      
  }

  async ngAfterViewInit(): Promise<void> {
    // await this.userTk.cleanPayment();
      
  }
}
