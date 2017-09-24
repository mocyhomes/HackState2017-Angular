import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	contributions:any[];

  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getContributions().subscribe(contributions => {
  		this.contributions = contributions;
  	});
  }

}
