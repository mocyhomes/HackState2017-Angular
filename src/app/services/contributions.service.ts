import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ContributionsService {
	contributions:FirebaseListObservable<any[]>;
	todos:FirebaseListObservable<any[]>;
	houseName:FirebaseObjectObservable<any>;
  notifications:FirebaseListObservable<any[]>
	uid:string;
  house:string;

  constructor(
  	private af:AngularFireDatabase,
  	private authService:AuthService
  ) {
    this.authService.getAuth().subscribe(auth => {
      if (auth)
        this.uid = auth.uid;
      this.houseName = this.af.object('private/users/-' + this.uid + '/house');
    });
  }
  
  getHouseName() {
  	return this.houseName;
  }

  setHouse(house) {
    this.house = house;
    this.todos = this.af.list('/private/houses/-' + this.house + '/todo');
  } 

  getTodos() {
    return this.af.list('/private/houses/-' + this.house + '/todo');
  }

  getNotifications(){
    return this.af.list('/private/houses/-' + this.house + '/notifications');
  }

  getResources() {
    return this.af.list('/private/users/-' + this.uid + '/contributions/resources');
  }

  getTime() {
    return this.af.list('/private/users/-' + this.uid + '/contributions/time');
  }
}