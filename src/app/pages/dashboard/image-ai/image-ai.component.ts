import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AmountObj, ResponseObj } from 'src/app/models/interfaces';
import { ImageAiService } from '../services/image-ai.service';
import { Image } from 'openai/resources';

@Component({
  selector: 'aigo-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.css']
})
export class ImageAiComponent {
  chatForm!: FormGroup
  
  constructor( private imageAi: ImageAiService ) {}
  
  ngOnInit(): void {
    this.chatForm = new FormGroup({
      prompt: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      resolution: new FormControl('', Validators.required)
    }) 
  }
  
  images: Image[] = this.imageAi.images
  response: ResponseObj =  this.imageAi.response;
  amountOptions: AmountObj[] = this.imageAi.amountOptions;
  resolutionOptions: AmountObj[] = this.imageAi.resolutionOptions;
  
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.imageAi.getImageGeneration(this.chatForm.value.prompt, this.images, this.response, this.chatForm.value.resolution, this.chatForm.value.amount);
      this.chatForm.reset(this.chatForm);
    }
  }
}
