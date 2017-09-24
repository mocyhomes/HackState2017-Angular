import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';
@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.css']
})
export class RoommatesComponent implements OnInit {
  roomie:boolean;
	roomies:any[];
  constructor(	private contributionsService:ContributionsService) { }

  ngOnInit() 
  {
  	this.contributionsService.getRoomie().subscribe(roomies => {
  		this.roomies = roomies;
  		if (roomies.length > 0) this.roomie = true;
      else this.roomie = false;
      console.log(this.roomies);
      console.log(roomies);
  	});
  }


   
}
