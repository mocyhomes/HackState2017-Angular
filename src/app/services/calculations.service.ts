import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class CalculationsService {
  constructor(
  	private af:AngularFireDatabase
  ) { }

  updateSummary(uid, type, value, unit) {
  	this.af.object('private/users/-' + uid + '/summary/' + type).subscribe(sum => {
  		console.log(sum);
  	});
  }

}
