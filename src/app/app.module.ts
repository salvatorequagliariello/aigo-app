import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthModule } from '@auth0/auth0-angular';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MarkdownModule } from 'ngx-markdown';
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageCardComponent } from './components/landing-page-card/landing-page-card.component';
import { LandingPageFooterComponent } from './components/landing-page-footer/landing-page-footer.component';
import { ManageUserTokensService } from './pages/dashboard/services/manage-user-tokens.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainNavBarComponent,
    LandingPageCardComponent,
    LandingPageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    FirebaseAppModule,
    MarkdownModule.forRoot(),
    AuthModule.forRoot({
      clientId: import.meta.env.NG_APP_AUTH_CLIENT_ID,
      domain: import.meta.env.NG_APP_AUTH_DOMAIN,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: import.meta.env.NG_APP_FIREBASE_API_KEY,
        authDomain: import.meta.env.NG_APP_AUTH_DOMAIN,
        projectId: import.meta.env.NG_APP_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId : import.meta.env.NG_APP_FIREBASE_APP_ID
      }
    )),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    NgbModal,
    ManageUserTokensService,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
