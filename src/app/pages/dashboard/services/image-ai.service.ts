import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Image } from 'openai/resources';
import { ChatCompletionMessage } from 'openai/resources/chat';
import { from } from 'rxjs';
import { AmountObj, ResolutionObj, ResponseObj } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageAiService {
  images: Image[] = [];
  amountOptions: AmountObj[] = [
    {
      value: '1',
      label: '1 Image'
    },
    {
      value: '2',
      label: '2 Images'
    },
    {
      value: '3',
      label: '3 Images'
    },
    {
      value: '4',
      label: '4 Images'
    },
    {
      value: '5',
      label: '5 Images'
    }
  ];
  resolutionOptions: ResolutionObj[] = [
    {
      value: '256x256',
      label: '256x256'
    },
    {
      value: '512x512',
      label: '512x512'
    },    
    {
      value: '1024x1024',
      label: '1024x1024'
    },
  ];
  response: ResponseObj = {
    loading: false,
    errorMessage: ''
  };
  
  constructor() { }
  
  readonly openAi = new OpenAI({
    apiKey: environment.openAi,
    dangerouslyAllowBrowser: true
  })

  async getImageGeneration
    (prompt: string, images: Image[], responseObj: ResponseObj, resolution: "256x256" | "512x512" | "1024x1024" | null | undefined, amount: string) {
    images.length = 0;
    responseObj.loading = true;
      await from(this.openAi.images.generate({
        prompt: prompt,
        n: parseInt(amount, 10),
        size: resolution
      })).subscribe({
        next(response: any) {
          response.data.forEach((image: Image) => images.push(image))
          responseObj.loading = false;
        },
        error(err) {
          console.log(err)
          responseObj.errorMessage = err;
        }
      });
  }
}
