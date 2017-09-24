import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
	houseName:string;
	invitee0:string;
	invitee1:string;
	invitee2:string;
	invitee3:string;

  constructor(
  	private contributionsService:ContributionsService,
  	private flashMessagesService:FlashMessagesService,
  	private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contributionsService.checkHouseName(this.houseName).subscribe(res => {
    	// console.log(res);
      if (res.name != null) {
        this.flashMessagesService.show('This house name is already taken.', { cssClass:'alert-danger', timeout:3000 });
        this.router.navigate(['/create-house']);
      } else {
      	this.contributionsService.createHouse(this.houseName);
        this.flashMessagesService.show('Your house is created.', { cssClass:'alert-success', timeout:3000 });
        this.router.navigate(['/']);
      }
    });
  }

}
