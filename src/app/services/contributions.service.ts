import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ContributionsService {
	contributions:FirebaseListObservable<any[]>;
  todos:FirebaseListObservable<any[]>;
  notifications:FirebaseListObservable<any[]>;

  constructor(
  	public af:AngularFireDatabase,
  ) {
  	this.contributions = this.af.list('/');
    this.todos         = this.af.list('/todo');
    this.notifications = this.af.list('/notifications');
  }

  getContributions() {
  	return this.contributions;
  }

  getTodos() {
  	return this.todos;
  }

  getNotifications(){
    return this.notifications;
  }
}