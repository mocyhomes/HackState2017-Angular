import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hasHouse:boolean;
	houses:any[];

  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getHouses().subscribe(houses => {
  		this.houses = houses;
      if (this.houses.length > 0) {
        this.hasHouse = true;
        this.contributionsService.setHouse(this.houses[0].$value);
      }
      else this.hasHouse = false;
  	});
  }

}
