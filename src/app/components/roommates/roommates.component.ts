import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';
@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.css']
})
export class RoommatesComponent implements OnInit {
  roommie:boolean;
	roommies:any[];
  constructor(	private contributionsService:ContributionsService) { }

  ngOnInit() 
  {
    this.contributionsService.getHouseName().subscribe(houseName => {
      this.contributionsService.getRoommies(houseName.$value).subscribe(roommies => {
        this.roommies = roommies;
        if (this.roommies.length > 0) this.roommie = true;
        else this.roommie = false;
      });
    });
  }


   
}
