import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ManageUserTokensService } from './pages/dashboard/services/manage-user-tokens.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Aigo';

  constructor( public auth: AuthService, private userTk: ManageUserTokensService, private meta: Meta ) {
    this.addTags();
  }

  ngOnInit(): void {
    this.userTk.checkUser();
  }

  addTags() {
    this.meta.addTags([
      { name: 'title', content: 'ai.Go' },
      { name: 'description', content: 'ai.GO: Unleash the power of AI to create stunning images, interact with a chatbot, and generate code effortlessly. Experience the future of AI-driven creativity and productivity.' },
      { name: 'robots', content: 'noindex, nofollow' },
      { property: 'og:title', content: 'ai.Go' },
      { property: 'og:description', content: 'ai.GO: Unleash the power of AI to create stunning images, interact with a chatbot, and generate code effortlessly. Experience the future of AI-driven creativity and productivity.' },
      {charset: 'UTF-8'},
   ]);
 }

}
