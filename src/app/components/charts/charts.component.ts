import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  house: String;
  resources: any;
  resourcesList: any[];

  constructor(private contributionsService:ContributionsService) {
   }

  ngOnInit() {
    this.contributionsService.getHouseName().subscribe(house => {
      this.house = house.$value;
      console.log(this.house);

      this.contributionsService.getHouseContributions(this.house).subscribe(contributions => {;
        console.log(contributions);
        this.resources = contributions.resources;
        console.log(this.resources);
        for (var key in this.resources.$value) {
          console.log(key);
        }
      });
    });
  }

  public barChartOptions:any = {
    // scaleShowVerticalLines: false,
    // responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

}
