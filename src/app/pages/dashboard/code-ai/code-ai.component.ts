import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeAiService } from '../services/code-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { IconObj, ResponseObj } from 'src/app/models/interfaces';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-code-ai',
  templateUrl: './code-ai.component.html',
  styleUrls: ['./code-ai.component.scss']
})
export class CodeAiComponent {
  chatForm!: FormGroup
  chat: ChatCompletionMessage[] = this.codeAi.messages
  response: ResponseObj =  this.codeAi.response;
  apiError: boolean = this.response.errorMessage ? true : false;
  isTokenAlertOpen: boolean = false;

  constructor( private codeAi: CodeAiService, private userTk: ManageUserTokensService ) {}
  
  ngOnInit(): void {
    this.userTk.checkUser();
    this.chatForm = new FormGroup({
      chatInput: new FormControl('', Validators.required)
    }) 
  }
  
  async onSubmit() {
    if (this.chatForm.valid && this.userTk.user.tokens >= 1) {
      const chatResponse = await this.codeAi.getCodeGeneration(this.chatForm.value.chatInput, this.chat, this.response);
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

  codeIcon: IconObj = {
    pathOne: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
    pathTwo: "M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
  };
}
