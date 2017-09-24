import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {
  resources:number;
  resourceUnit:string;
  time:number;
  timeUnit:string;

  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getSummary().subscribe(summary => {
      this.resources    = summary.resources.value;
      this.resourceUnit = summary.resources.unit;
      this.time         = summary.time.value;
      this.timeUnit     = summary.time.unit;
    });
  }

}
