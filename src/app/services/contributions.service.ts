import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ContributionsService {
	contributions:FirebaseListObservable<any[]>;
	todos:FirebaseListObservable<any[]>;
	houses:FirebaseListObservable<any[]>;
	uid:string;
  house:string;

  constructor(
  	private af:AngularFireDatabase,
  	private authService:AuthService
  ) {
    this.authService.getAuth().subscribe(auth => {
      if (auth)
        this.uid = auth.uid;
      this.houses = this.af.list('private/users/-' + this.uid + '/houses');
    });
  }

  getHouses() {
    console.log(this.house);
    this.todos = this.af.list('/private/houses/-' + this.house + '/todo');
  	return this.houses;
  }

  setHouse(house) {
    this.house = house;
  } 

  getTodos() {
  	return this.todos;
  }
}