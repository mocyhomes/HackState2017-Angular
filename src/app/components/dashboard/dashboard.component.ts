import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hasHouse:boolean;
	house:string;

  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getHouseName().subscribe(house => {
  		this.house = house.$value;
      if (this.house.length > 0) {
        this.hasHouse = true;
        this.contributionsService.setHouse(this.house);
      }
      else this.hasHouse = false;
  	});
  }

}
