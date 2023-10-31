import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { CollectionReference, DocumentData, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { AuthObj, PackObj, UserObj } from 'src/app/models/interfaces';

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

  checkUser(): void {
    this.auth.isAuthenticated$.subscribe(data => this.authObj.isLoggedIn = data);
    this.auth.user$.subscribe(data => this.authObj.authId = data?.sub);

    if (this.authObj.isLoggedIn && this.authObj.authId) {
        const usersRef = doc(this.fs, 'users', this.authObj.authId);
        getDoc(usersRef).then(docSnap => {
          if (!docSnap.exists()) {
            this.addUser();
            this.getUser();
          } else {
            this.getUser();
          };
        }).catch(err => console.log(err));
    };
  }

  getUser(): void {
    if (this.authObj.isLoggedIn) { 
        collectionData(this.usersCollection).subscribe(data => {
          const foundUser: DocumentData[] = data.filter(user => user['id'] === this.authObj.authId);

          if (foundUser.length >= 1) {
            this.user.id = foundUser[0]['id'];
            this.user.name = foundUser[0]['name'];
            this.user.email = foundUser[0]['email'];
            this.user.tokens = foundUser[0]['tokens'];
            this.user.lastPayment = foundUser[0]['lastPayment'];
            this.user.tokensBought = foundUser[0]['tokensBought'];
          };
        });
    }
  };

  addUser(): void {
    this.auth.user$.subscribe(data => {
      if (data?.name && data.email && data.sub) {
        this.user.name = data.name;
        this.user.email = data.email;
        this.user.id = data.sub;
        this.user.tokens = 10;
      }

      if (this.authObj.isLoggedIn && this.authObj.authId) 
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

  async updateUserTokens(amount: number) {
    if (this.authObj.isLoggedIn && this.authObj.authId) {
      const userRef = doc(this.fs, 'users', this.authObj.authId);
      const docSnap = await getDoc(userRef);

      try {
      if (docSnap.exists()) {
        await updateDoc(userRef, { tokens: docSnap.data()['tokens'] + amount });
      }
      } catch (error) {
        console.log(error);
        throw error;
      }
    } 
  }

  async addPayment(pack: PackObj) {
    if (this.authObj.isLoggedIn && this.authObj.authId) {
      const userRef = doc(this.fs, 'users', this.authObj.authId);
      try {
        await updateDoc(userRef, { lastPayment: pack.price, tokensBought: pack.tokens });
      } catch (error) {
        console.log(error);
        throw error;
      }
    } 
  }

  async confirmPayment() {
    if (this.authObj.isLoggedIn && this.authObj.authId) {
      const userRef = doc(this.fs, 'users', this.authObj.authId);
      try {
        const doc = await getDoc(userRef);
        const user = await doc.data();
        if (doc.exists() && user) {
          await this.updateUserTokens(user['tokensBought']);
          await updateDoc(userRef, { lastPayment: null, tokensBought: null });
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }

}
