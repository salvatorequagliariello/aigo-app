import { Component, OnInit } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';
import { UserObj } from 'src/app/models/interfaces';
import { DocumentData } from 'firebase/firestore';

@Component({
  selector: 'aigo-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  constructor(private userTk: ManageUserTokensService) {}
  
  ngOnInit(): void {
    this.userTk.getUser(this.user);

  }

  user: UserObj | DocumentData = this.userTk.user;
  
  userTokens() {
    console.log(this.user);
  }
}
