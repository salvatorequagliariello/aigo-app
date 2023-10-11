import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { ChatCompletionMessage} from 'openai/resources/chat';
import { filter, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  
  constructor() { }
  
  messages: ChatCompletionMessage[] = [];
  readonly openAi = new OpenAI({
    apiKey: environment.openAi,
    dangerouslyAllowBrowser: true
  })

  async getChatResponse(message: string): Promise<void> {

    this.messages.push({ role: 'user', content: message });
    
    try {
      from(this.openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: this.messages
      })).subscribe(response => {
          this.messages.push(response.choices[0].message);
          console.log(response.choices[0].message.content);
      });

    } catch (error: any) {
        console.log(error);
        return error;
    }
  }
}
