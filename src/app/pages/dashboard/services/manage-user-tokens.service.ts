import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { CollectionReference, DocumentData, addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { AuthObj, UserObj } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ManageUserTokensService {
  constructor(private fs: Firestore, public auth: AuthService) { }

  usersCollection: CollectionReference = collection(this.fs, 'users');
  
  user: UserObj | DocumentData = {
    tokens: 0,
    name: "",
    email: "",
    id: "",
  }

  authObj: AuthObj = {
    isLoggedIn: false,
    authId: ''
  }

  async checkUser() {
    this.auth.isAuthenticated$.subscribe(data => this.authObj.isLoggedIn = data);
    this.auth.user$.subscribe(data => this.authObj.authId = data?.sub);

    if (this.authObj.isLoggedIn && this.authObj.authId) {
        const usersRef = doc(this.fs, 'users', this.authObj.authId);
        const docSnap = await getDoc(usersRef);
        
        if (!docSnap.exists()) {
          this.addUser();
          this.getUser();
        } else {
          this.getUser();
        };
    };
  }

  getUser() {
    if (this.authObj.isLoggedIn) { 
        collectionData(this.usersCollection).subscribe(data => {
          const foundUser: DocumentData[] = data.filter(user => user['id'] === this.authObj.authId);

          if (foundUser.length >= 1) {
            this.user.id = foundUser[0]['id'];
            this.user.name = foundUser[0]['name'];
            this.user.email = foundUser[0]['email'];
            this.user.tokens = foundUser[0]['tokens'];
          } 
        })
    }
  };

  addUser() {
    this.auth.user$.subscribe(data => {
      if (data?.name && data.email && data.sub) {
        this.user.name = data.name;
        this.user.email = data.email;
        this.user.id = data.sub;
        this.user.tokens = 10;
      }

      if (this.authObj.authId) 
        setDoc(doc(this.fs, 'users', this.authObj.authId), {
           name: this.user.name,
           email: this.user.email,
           tokens: this.user.tokens,
           id: this.user.id
         }).catch(err => {
          console.log(err);
         });
    })
  }

  updateUser() {

  }
}