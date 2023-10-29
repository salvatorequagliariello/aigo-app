import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AmountObj, IconObj, ResponseObj } from 'src/app/models/interfaces';
import { ImageAiService } from '../services/image-ai.service';
import { Image } from 'openai/resources';
import { ManageUserTokensService } from '../services/manage-user-tokens.service';

@Component({
  selector: 'aigo-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.scss']
})
export class ImageAiComponent {
  chatForm!: FormGroup
  images: Image[] = this.imageAi.images
  response: ResponseObj =  this.imageAi.response;
  amountOptions: AmountObj[] = this.imageAi.amountOptions;
  resolutionOptions: AmountObj[] = this.imageAi.resolutionOptions;
  apiError: boolean = this.response.errorMessage ? true : false;
  isTokenAlertOpen: boolean = false;

  constructor( private imageAi: ImageAiService, private userTk: ManageUserTokensService ) {}

  ngOnInit(): void {
    this.userTk.checkUser();
    this.chatForm = new FormGroup({
      prompt: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      resolution: new FormControl('', Validators.required)
    }) 
  }
  
  async onSubmit() {
    if (this.chatForm.valid && this.userTk.user.tokens >= 1) {
      const chatResponse = await this.imageAi.getImageGeneration(this.chatForm.value.prompt, this.images, this.response, this.chatForm.value.resolution, this.chatForm.value.amount);
      const tokensToPay = this.chatForm.value.amount * 2;
      this.userTk.updateUserTokens(-tokensToPay);
      this.chatForm.reset(this.chatForm);
    } else if (this.userTk.user.tokens <= 0) {
      this.isTokenAlertOpen = true;
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    this.images.length = 0;
  }

  closeTokensAlert(isOpen: boolean) {
    this.isTokenAlertOpen = isOpen;
  }

  closeApiErrorAlert(isOpen: boolean) {
    this.apiError = isOpen;
  }

  imageIcon: IconObj = {
    pathOne: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7Z"
  }
}
