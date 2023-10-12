import { Injectable } from '@angular/core';
import { ChatCompletionMessage, ChatCompletionMessageParam } from 'openai/resources/chat';
import OpenAI from 'openai';
import { from } from 'rxjs';
import { ResponseObj } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeAiService {
  messages: ChatCompletionMessage[] = [];
  response: ResponseObj = {
    loading: false,
    errorMessage: ''
  };
  instructionMessage: ChatCompletionMessageParam =  {
    role: 'system',
    content: 'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.'
  }

  constructor() { }
  
  readonly openAi = new OpenAI({
    apiKey: environment.openAi,
    dangerouslyAllowBrowser: true
  })

  async getChatResponse(message: string, messages: ChatCompletionMessage[], responseObj: ResponseObj) {
    messages.push({ role: 'user', content: message });
    responseObj.loading = true;
      await from(this.openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [this.instructionMessage, ...this.messages]
      })).subscribe({
        next(response) {
          messages.push(response.choices[0].message);
          responseObj.loading = false;
        },
        error(err) {
          console.log(err)
          responseObj.errorMessage = err;
        }
      });
  }
}
