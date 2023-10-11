import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from '../services/open-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';

@Component({
  selector: 'aigo-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  chatForm!: FormGroup
  
  constructor( private openAi: OpenAiService ) {}
  
  ngOnInit(): void {
    this.chatForm = new FormGroup({
      chatInput: new FormControl('', Validators.required)
    }) 
  }
  
  chat: ChatCompletionMessage[] = this.openAi.messages
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.openAi.getChatResponse(this.chatForm.value.chatInput);
      this.chatForm.reset(this.chatForm);
    }
  }
}
