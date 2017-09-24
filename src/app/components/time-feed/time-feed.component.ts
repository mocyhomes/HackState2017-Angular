import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-time-feed',
  templateUrl: './time-feed.component.html',
  styleUrls: ['./time-feed.component.css']
})
export class TimeFeedComponent implements OnInit {

  chores:any[];
  chore:boolean;

  

  constructor(
    private contributionsService:ContributionsService,
  ) { }

  ngOnInit() {
  	this.contributionsService.getChores().subscribe(chores => {
      this.chores = chores;
      console.log(this.chores);
      if (this.chores.length>0) this.chore = true;
      else this.chore = false;

    });
  } // end of init



}
