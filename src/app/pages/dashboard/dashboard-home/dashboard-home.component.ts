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
  user: UserObj | DocumentData = this.userTk.user;
  
  ngOnInit(): void {
    this.userTk.checkUser();
  }

  userTokens() {
    this.userTk.checkUser();
    console.log(this.user)
  }

  // openVerticallyCentered(content: any) {
	// 	this.modalService.open(content, { centered: true });
	// }
}
