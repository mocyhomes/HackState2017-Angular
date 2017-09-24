import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {
	notification:boolean;
  notifications: any[];
  
  constructor(private contributionsService:ContributionsService) { }

  ngOnInit() {
    this.contributionsService.getNotifications().subscribe(notifications => {
  		this.notifications = notifications;
  		if (notifications) this.notification = true;
  		else this.notification = false;
  	});
  }

}
