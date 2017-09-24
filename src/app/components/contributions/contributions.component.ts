import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {
	resources:any[];
	time:any[];


  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getResources().subscribe(resources => {
  		this.resources = resources;
  	});
  	this.contributionsService.getTime().subscribe(time => {
  		this.time = time;
  	});
  }

}
