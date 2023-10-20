import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from '../services/open-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { IconObj, ResponseObj } from 'src/app/models/interfaces';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss']
})
export class AiChatComponent implements OnInit {
  chatForm!: FormGroup
  @ViewChild('noTkMsg') noTkMsg!: ElementRef<HTMLInputElement>;
  isTokenAlertOpen: boolean = false;
  chat: ChatCompletionMessage[] = this.openAi.messages
  response: ResponseObj =  this.openAi.response;
  apiError: boolean = this.response.errorMessage ? true : false;
  
  constructor( private openAi: OpenAiService, private userTk: ManageUserTokensService ) {}
  
  ngOnInit(): void {
    this.userTk.checkUser();
    this.chatForm = new FormGroup({
      chatInput: new FormControl('', Validators.required)
    });
  }
  
  async onSubmit() {
    if (this.chatForm.valid && this.userTk.user.tokens >= 1) {
      const chatResponse = await this.openAi.getChatResponse(this.chatForm.value.chatInput, this.chat, this.response);
      this.userTk.updateUserTokens(-1);
      this.chatForm.reset(this.chatForm);
    } else if (this.userTk.user.tokens <= 0) {
      this.isTokenAlertOpen = true;
    } else {
      return;
    }
  }

  closeTokensAlert(isOpen: boolean) {
    this.isTokenAlertOpen = isOpen;
  }

  closeApiErrorAlert(isOpen: boolean) {
    this.apiError = isOpen;
  }

  messageIcon: IconObj = {
    pathOne: "M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    pathTwo: "m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
  };
}
