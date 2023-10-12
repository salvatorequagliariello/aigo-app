import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { ChatCompletionMessage} from 'openai/resources/chat';
import { filter, from, map } from 'rxjs';
import { ResponseObj } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  messages: ChatCompletionMessage[] = [];
  response: ResponseObj = {
    loading: false,
    errorMessage: ''
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
        messages: this.messages
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
