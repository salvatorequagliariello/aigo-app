import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    MainNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ... env.auth,
      authorizationParams: {
        redirect_uri: "http://localhost:4200/dashboard"
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
