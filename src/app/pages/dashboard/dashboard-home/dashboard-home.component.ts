import { Component, OnInit } from '@angular/core';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';
import { UserObj } from 'src/app/models/interfaces';
import { DocumentData } from 'firebase/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aigo-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  constructor(private userTk: ManageUserTokensService, private modalService: NgbModal) {}
  user: UserObj | DocumentData = this.userTk.user;
  
  ngOnInit(): void {
    this.userTk.checkUser();
  }

  userTokens() {
    this.userTk.checkUser();
    console.log(this.user)
  }
}
