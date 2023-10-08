import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aigo-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  chatForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
      this.chatForm = new FormGroup({
        chatInput: new FormControl('', Validators.required)
      }) 
  }

  onSubmit() {
    if (this.chatForm.valid) {
      console.log(this.chatForm.value);
      this.chatForm.reset(this.chatForm);
    }
  }
}
