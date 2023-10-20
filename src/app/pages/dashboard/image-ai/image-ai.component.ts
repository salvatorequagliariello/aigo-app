import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AmountObj, IconObj, ResponseObj } from 'src/app/models/interfaces';
import { ImageAiService } from '../services/image-ai.service';
import { Image } from 'openai/resources';

@Component({
  selector: 'aigo-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.css']
})
export class ImageAiComponent {
  chatForm!: FormGroup
  images: Image[] = this.imageAi.images
  response: ResponseObj =  this.imageAi.response;
  amountOptions: AmountObj[] = this.imageAi.amountOptions;
  resolutionOptions: AmountObj[] = this.imageAi.resolutionOptions;
  
  constructor( private imageAi: ImageAiService ) {}

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      prompt: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      resolution: new FormControl('', Validators.required)
    }) 
  }
  
  async onSubmit() {
    if (this.chatForm.valid) {
      const chatResponse = await this.imageAi.getImageGeneration(this.chatForm.value.prompt, this.images, this.response, this.chatForm.value.resolution, this.chatForm.value.amount);
      this.chatForm.reset(this.chatForm);
    }
  }

  imageIcon: IconObj = {
    pathOne: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7Z"
  }
}
