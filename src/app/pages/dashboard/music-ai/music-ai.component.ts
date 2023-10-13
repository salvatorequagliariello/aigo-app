import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from '../services/open-ai.service';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { ResponseObj } from 'src/app/models/interfaces';

@Component({
  selector: 'aigo-music-ai',
  templateUrl: './music-ai.component.html',
  styleUrls: ['./music-ai.component.css']
})
export class MusicAiComponent {
  chatForm!: FormGroup
  
  constructor( private openAi: OpenAiService ) {}
  
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
      this.chatForm.reset(this.chatForm);
    }
  }
}
