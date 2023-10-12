import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeAiService } from '../services/code-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { ResponseObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-code-ai',
  templateUrl: './code-ai.component.html',
  styleUrls: ['./code-ai.component.css']
})
export class CodeAiComponent {
  chatForm!: FormGroup
  
  constructor( private codeAi: CodeAiService ) {}
  
  ngOnInit(): void {
    this.chatForm = new FormGroup({
      chatInput: new FormControl('', Validators.required)
    }) 
  }
  
  chat: ChatCompletionMessage[] = this.codeAi.messages
  response: ResponseObj =  this.codeAi.response;
  
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.codeAi.getChatResponse(this.chatForm.value.chatInput, this.chat, this.response);
      this.chatForm.reset(this.chatForm);
    }
  }
}
