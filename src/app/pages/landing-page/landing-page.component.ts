import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'aigo-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: ['Coding.', 'Conversation.', 'Image Generation.'],
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      backDelay: 100,
      loop: true
    };
 
  const typed = new Typed('.typed-element', options);
  }

}
