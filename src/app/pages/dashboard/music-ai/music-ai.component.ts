import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseObj } from 'src/app/models/interfaces';
import { MusicAiService } from '../services/music-ai.service';

@Component({
  selector: 'aigo-music-ai',
  templateUrl: './music-ai.component.html',
  styleUrls: ['./music-ai.component.css']
})
export class MusicAiComponent {
  chatForm!: FormGroup
  
  constructor( private musicAi: MusicAiService ) {}
  
  ngOnInit(): void {
    this.chatForm = new FormGroup({
      prompt: new FormControl('', Validators.required)
    }) 
  }
  
  music: any[] = this.musicAi.music
  response: ResponseObj =  this.musicAi.response;
  
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.musicAi.getAudioGeneration(this.chatForm.value.chatInput, this.music, this.response);
      this.chatForm.reset(this.chatForm);
    }
  }
}
