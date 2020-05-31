import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <h1 [ngStyle]="{'color':'white','background-color':'brown'}">SPA Banking system </h1>
  <hr/>
  <a [routerLink]="['']">Home</a><br/>
  <a [routerLink]="['recent']">Recent</a><br/>
  <a [routerLink]="['payment']">Payment</a><br/>
  <router-outlet></router-outlet>
  <hr/>
  <div [ngStyle]="{'color':'white','background-color':'indigo','float':'right'}">Bank Of America</div>
  `,
  
})
export class AppComponent {
  title = 'bankAccount';
}
