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
import { ManageUserTokensService } from './services/manage-user-tokens.service';
import { ProModalComponent } from 'src/app/components/pro-modal/pro-modal.component';
import { CartComponent } from './cart/cart.component';
import { StripeService } from './services/stripe-service.service';
import { CartSuccessComponent } from './cart-success/cart-success.component';
import { CartErrorComponent } from './cart-error/cart-error.component';
import { AiHeaderComponent } from 'src/app/components/ai-header/ai-header.component';
import { EmptyGenerationComponent } from 'src/app/components/empty-generation/empty-generation.component';
import { GenerationErrorAlertComponent } from 'src/app/components/generation-error-alert/generation-error-alert.component';
import { AppErrorAlertComponent } from 'src/app/components/app-error-alert/app-error-alert.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    AiChatComponent,
    CodeAiComponent,
    ImageAiComponent,
    ProModalComponent,
    CartComponent,
    CartSuccessComponent,
    CartErrorComponent,
    AiHeaderComponent,
    EmptyGenerationComponent,
    GenerationErrorAlertComponent,
    AppErrorAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    OpenAiService,
    CodeAiService,
    ImageAiService,
    ManageUserTokensService,
    StripeService,
  ]
})
export class DashboardModule { }
