import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from './services/open-ai.service';
import { CodeAiComponent } from './code-ai/code-ai.component';
import { CodeAiService } from './services/code-ai.service';
import { MarkdownModule } from 'ngx-markdown';
import { ImageAiComponent } from './image-ai/image-ai.component';
import { ImageAiService } from './services/image-ai.service';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    AiChatComponent,
    CodeAiComponent,
    ImageAiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    OpenAiService,
    CodeAiService,
    ImageAiService
  ]
})
export class DashboardModule { }
