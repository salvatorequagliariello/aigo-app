import { Component } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  constructor(private userTk: ManageUserTokensService) {}

  userTokens() {
    this.userTk.getUserTokens()
  }
}
