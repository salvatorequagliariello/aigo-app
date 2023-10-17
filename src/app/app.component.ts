import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ManageUserTokensService } from './pages/dashboard/services/manage-user-tokens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aigo';

  constructor( public auth: AuthService, private userTk: ManageUserTokensService ) {}

  ngOnInit(): void {
    this.userTk.checkUser();
  }
}
