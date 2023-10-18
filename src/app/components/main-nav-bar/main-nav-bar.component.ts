import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DocumentData } from 'firebase/firestore';
import { UserObj } from 'src/app/models/interfaces';
import { ManageUserTokensService } from 'src/app/pages/dashboard/services/manage-user-tokens.service';

@Component({
  selector: 'aigo-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent {

  constructor(public auth: AuthService, private userTk: ManageUserTokensService) {}
  user: UserObj | DocumentData = this.userTk.user;

  handleSignIn() {
    this.auth.loginWithRedirect({ appState: { target: '/dashboard' } });
  }

  handleSignOut() {
    this.auth.logout();
  }

  showUser() {
    this.auth.user$.subscribe(user => console.log(user))
  }
}
