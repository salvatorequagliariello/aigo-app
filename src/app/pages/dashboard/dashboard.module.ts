import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from './services/open-ai.service';
import { CodeAiComponent } from './code-ai/code-ai.component';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    AiChatComponent,
    CodeAiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    OpenAiService
  ]
})
export class DashboardModule { }
