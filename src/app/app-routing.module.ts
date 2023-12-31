import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { DashboardHomeComponent } from './pages/dashboard/dashboard-home/dashboard-home.component';
import { AiChatComponent } from './pages/dashboard/ai-chat/ai-chat.component';
import { CodeAiComponent } from './pages/dashboard/code-ai/code-ai.component';
import { ImageAiComponent } from './pages/dashboard/image-ai/image-ai.component';
import { CartComponent } from './pages/dashboard/cart/cart.component';
import { CartSuccessComponent } from './pages/dashboard/cart-success/cart-success.component';
import { CartErrorComponent } from './pages/dashboard/cart-error/cart-error.component';

const routes: Routes = [
  { 
    path: '',
    component: LandingPageComponent
  },
  { 
    path: 'dashboard',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/chat', 
    component: AiChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/code-generation', 
    component: CodeAiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/image-generation', 
    component: ImageAiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/cart', 
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/cart/checkout-success', 
    component: CartSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/cart/checkout-error', 
    component: CartErrorComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
