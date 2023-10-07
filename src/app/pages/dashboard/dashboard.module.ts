import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    AiChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
