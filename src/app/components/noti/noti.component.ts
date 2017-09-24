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
  show:boolean;
  emergency:boolean;
  newNoti:string;
  
  constructor(
    private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
    this.contributionsService.getNotifications().subscribe(notifications => {
  		this.notifications = notifications;
  		if (notifications.length > 0) this.notification = true;
  		else this.notification = false;
  	});
  }

  toggleShow() {
    this.show = !this.show;
  }

  format(date,month,year) {
    let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var dateSuffix = '';
    if (date == 1 || date == 21 || date == 31)
      dateSuffix = 'st';
    else if (date == 2 || date == 22)
      dateSuffix = 'nd';
    else if (date == 3 || date == 23)
      dateSuffix = 'rd';
    else dateSuffix = 'th';
    return monthArray[month-1] + ' ' + date + dateSuffix + ' ' + year;
  }

  addNotification() {
    console.log(this.emergency);
    this.contributionsService.addNotification(this.newNoti, this.emergency);
    this.newNoti   = null;
    this.show      = false;
    this.emergency = false;
  }

  removeNotification(key) {
    this.contributionsService.removeNotification(key);
  }
}
