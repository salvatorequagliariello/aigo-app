import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from '../services/open-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { ResponseObj } from 'src/app/models/interfaces';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  chatForm!: FormGroup
  
  constructor( private openAi: OpenAiService, private userTk: ManageUserTokensService ) {}
  
  ngOnInit(): void {
    this.chatForm = new FormGroup({
      chatInput: new FormControl('', Validators.required)
    }) 
  }
  
  chat: ChatCompletionMessage[] = this.openAi.messages
  response: ResponseObj =  this.openAi.response;
  
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.openAi.getChatResponse(this.chatForm.value.chatInput, this.chat, this.response);
      this.userTk.updateUserTokens(-1);
      this.chatForm.reset(this.chatForm);
    };
  }
}
