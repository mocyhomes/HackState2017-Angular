import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {
  displayName:string;
  existed:boolean;

  constructor(
    public af:AngularFireDatabase,
    public afAuth:AngularFireAuth
	) { }

  login(email:string, password:string) {
    console.log('hello');
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, password)
  			.then(userData => resolve(userData),
  			      err      => reject(err));
  	});
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
              err      => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  setName(name) {
    this.displayName = name;
    this.getAuth().subscribe(auth => {
      if (auth) {
        auth.updateProfile({
          displayName:name,
          photoURL:null
        }).then((res) => {
          return;
        }).catch((err) => {
          return err;
        });
      }
    });
  }

  setNewUser(name,username,email) {
    this.af.object('/usernames/-' + username).set(email);
    this.getAuth().subscribe(auth => {
      if (auth) {
        this.af.object('/private/users/-' + auth.uid + '/displayName').set(name);
        this.af.object('/private/users/-' + auth.uid + '/email'      ).set(email);
        this.af.object('/private/users/-' + auth.uid + '/username'   ).set(username);
      }    
    });
  }

  checkUsername(username) {
    return this.af.object('/usernames/-' + username).take(1);
  }
}
