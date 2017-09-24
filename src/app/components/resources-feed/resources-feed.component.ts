import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-resources-feed',
  templateUrl: './resources-feed.component.html',
  styleUrls: ['./resources-feed.component.css']
})
export class ResourcesFeedComponent implements OnInit {

  resources:any[];
  resource:boolean;

  

  constructor(
    private contributionsService:ContributionsService,
  ) { }

  ngOnInit() {
  	this.contributionsService.getResources().subscribe(resources => {
      this.resources = resources;
      if (this.resources.length>0) this.resource = true;
      else this.resource = false;

    });
  } // end of init



}
