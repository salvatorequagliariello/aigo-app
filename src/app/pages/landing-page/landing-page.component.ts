import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import Typed from 'typed.js';
import { ManageUserTokensService } from '../dashboard/services/manage-user-tokens.service';
import { DocumentData } from 'firebase/firestore';
import { UserObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public auth: AuthService, private userTk: ManageUserTokensService) {}
  user: UserObj | DocumentData = this.userTk.user;

  ngOnInit(): void {
    const options = {
      strings: ['Code Generation.', 'Chatbot.', 'Image Generation.'],
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      backDelay: 200,
      loop: true
    };
 
  const typed = new Typed('.typed-element', options);
  }

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
