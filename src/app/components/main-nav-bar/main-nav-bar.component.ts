import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'aigo-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent {

  constructor(public auth: AuthService) {}

  signIn() {
    this.auth.loginWithRedirect();
  }

  showUser() {
    this.auth.user$.subscribe(user => console.log(user))
  }
}
