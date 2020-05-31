import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RecentComponent } from './recent.component';
import { PaymentComponent } from './payment.component';
import { ChartComponent } from './chart.component';
import { FourOfourComponent } from './four-ofour.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentComponent,
    PaymentComponent,
    ChartComponent,
    FourOfourComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'recent',component:RecentComponent},
      {path:'payment', component:PaymentComponent},
      {path:'chart', component:ChartComponent},
      {path:'404', component: FourOfourComponent},
      {path:'**', component:FourOfourComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
