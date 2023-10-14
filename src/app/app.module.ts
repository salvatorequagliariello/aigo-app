import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { AuthModule } from '@auth0/auth0-angular';

import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    MarkdownModule.forRoot(),
    AuthModule.forRoot({
      clientId: import.meta.env.NG_APP_AUTH_CLIENT_ID,
      domain: import.meta.env.NG_APP_AUTH_DOMAIN,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
