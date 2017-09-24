import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-house',
  templateUrl: './join-house.component.html',
  styleUrls: ['./join-house.component.css']
})
export class JoinHouseComponent implements OnInit {
	houseName:string;

  constructor(
  	private contributionsService:ContributionsService,
  	private flashMessagesService:FlashMessagesService,
  	private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contributionsService.checkHouseName(this.houseName).subscribe(res => {
      if (res.name == null) {
        this.flashMessagesService.show('This house name is already taken.', { cssClass:'alert-danger', timeout:3000 });
        this.router.navigate(['/join-house']);
      } else {
      	this.contributionsService.joinHouse(this.houseName);
        this.flashMessagesService.show('You are added to the house.', { cssClass:'alert-success', timeout:3000 });
        this.router.navigate(['/']);
      }
    });
  }
}
