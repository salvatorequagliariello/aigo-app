import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import Typed from 'typed.js';
import { ManageUserTokensService } from '../dashboard/services/manage-user-tokens.service';
import { DocumentData } from 'firebase/firestore';
import { ModelLinkObj, UserObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public auth: AuthService, private userTk: ManageUserTokensService) {}
  user: UserObj | DocumentData = this.userTk.user;

  ngOnInit(): void {
    this.userTk.checkUser();
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

  modelsLink: ModelLinkObj[] = [
    {
      name: "Conversation",
      description: "Our AI chat feature allows you to engage in intelligent conversations, seek answers to your questions, and receive personalized recommendations. Powered by advanced natural language processing, ai.go understands your input and responds in a conversational manner, making interactions feel incredibly natural and human-like.",
      icon: {
        pathOne: "M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
        pathTwo: "m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
      }
    } ,
    {
      name: "Code Generation",
      description: "But that's not all - ai.go goes beyond chat. With our coding generation feature, you can say goodbye to hours of manual coding. Simply describe the functionality you need, and ai.go will generate the code for you. It's like having a coding assistant right at your side, saving you time and effort.",
      icon: {
        pathOne: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
        pathTwo: "M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
      }
    } ,
    {
      name: "Image Generation",
      description: "Additionally, ai.go offers image generation capabilities. Whether you need stunning visuals for your projects or want to explore creative possibilities, ai.go has got you covered. Generate high-quality images based on your preferences and unleash your imagination like never before.",
      icon: {
        pathOne: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7Z"
      }
    } 
  ]
}
