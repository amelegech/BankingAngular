import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  template: `
    <h1 [ngStyle]="{'color':'blue'}">Chart list</h1>
    <h4 *ngFor="let item of userChart">
    category: {{item.category}}
    percentage: {{item.percentage | mypipe:'%'}}
    </h4>

  `,

})
export class ChartComponent implements OnInit {
  public userChart = [];
  constructor(private router: Router) {
    this.userChart = this.router.getCurrentNavigation().extras.state.data;

    console.log(this.userChart);
  }

  ngOnInit(): void {}
}
