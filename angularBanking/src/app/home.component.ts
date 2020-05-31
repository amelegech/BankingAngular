import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MyServiceService } from './myservice.service';

@Component({
  selector: 'app-home',
  template: `
    <h3 [ngStyle]="{'color':'aqua','background-color':'green'}">Home Page shows about user info!</h3>
    <h3 [ngStyle]="{'color':'brown'}"> Welcome Back: {{userDetail.name}}!</h3>
    <hr/>
    <h5>Your Current balance: {{userDetail.balance |currency}}</h5>
    <h5>Total expence: {{userDetail.expenses | currency}}</h5>
    <h5>Last payment: {{userDetail.lastpayment | date}}</h5>
    <a [routerLink]="['chart']" [state]="{data:userDetail.chart}">Go-To-Chart</a>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  public userDetail;
  constructor(private service: MyServiceService) {}

  ngOnInit(): void {
    this.service.getUserDetail().subscribe((data) => {
      this.userDetail = data;
      console.log(data);
    });
  }
}
