import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { CollectionReference, DocumentData, addDoc, collection } from 'firebase/firestore';
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

  getUser(user : UserObj | DocumentData) {
    this.auth.isAuthenticated$.subscribe(data => this.authObj.isLoggedIn = data);
    this.auth.user$.subscribe(data => this.authObj.authId = data?.sub);

    if (this.authObj.isLoggedIn) { 
      try {
        collectionData(this.usersCollection).subscribe(data => {
          console.log(data)
          const foundUser: DocumentData[] = data.filter(user => user['id'] === this.authObj.authId);

          if (foundUser.length >= 1) {
            this.user.id = foundUser[0]['id'];
            this.user.name = foundUser[0]['name'];
            this.user.email = foundUser[0]['email'];
            this.user.tokens = foundUser[0]['tokens'];
          }

        })
      } catch (error) {
          console.log(error);
      }
    }
  }

  addUser() {
    this.auth.user$.subscribe(data => {
      if (data?.name && data.email && data.sub) {
        this.user.name = data.name;
        this.user.email = data.email;
        this.user.id = data.sub;
        this.user.tokens = 10;
      }
      addDoc(this.usersCollection, this.user);
    })
  }

  updateUser() {

  }
}
