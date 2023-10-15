import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { CollectionReference, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { UserObj } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ManageUserTokensService {
  constructor(private fs: Firestore, public auth: AuthService) { }
  
  user: UserObj = {
    isLoggedIn: false,
    tokens: {
      chatTokens: 0,
      codeTokens: 0,
      imageToken: 0
    },
    name: "",
    email: "",
    id: ""
  }

  getUserTokens() {
    this.auth.isAuthenticated$.subscribe(data => this.user.isLoggedIn = data);

    if (this.user.isLoggedIn) { 
      this.auth.user$.subscribe(data => {
        if (data?.name && data.email) {
          this.user.name = data?.name;
          this.user.email = data.email;

        }
      }).
    }

    // const userDetails = this.auth.user$.subscribe(user => {
    //   setDoc(doc(db, 'users', user?.sub), {
    //     name: user?.name,
    //   })
    // });
  }

  updateUserTokens() {

  }
}
