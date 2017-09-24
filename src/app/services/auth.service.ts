import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    public af:AngularFireDatabase,
    public afAuth:AngularFireAuth
	) { }

  login(email:string, password:string) {
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, password)
  			.then(userData => resolve(userData),
  			      err      => reject(err));
  	});
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
}
