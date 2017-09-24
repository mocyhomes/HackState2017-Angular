import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ContributionsService {
	contributions:FirebaseListObservable<any[]>;

  constructor(
  	public af:AngularFireDatabase,
  ) {
  	this.contributions = this.af.list('/');
  }

  getContributions() {
  	console.log(this.contributions);
  	return this.contributions;
  }
}
