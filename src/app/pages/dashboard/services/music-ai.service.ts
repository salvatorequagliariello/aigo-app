import { Injectable } from '@angular/core';
import { ResponseObj } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';
import Replicate from "replicate";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicAiService {
  music: any[] = [];
  response: ResponseObj = {
    loading: false,
    errorMessage: ''
  };

  constructor( private http: HttpClient ) { }
  
  replicate = new Replicate({
    auth: environment.replicateAi,
  })

  async getAudioGeneration(prompt: string, music: any[], responseObj: ResponseObj) {
    responseObj.loading = true;

    try {
      const response = await this.replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            prompt_a: prompt
          }
        }
        );

      console.log(response);
    } catch {

    } finally {

    }
  }
}
