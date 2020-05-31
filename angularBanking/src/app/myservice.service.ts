import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private userDetail={
    _id: '1',
    name: 'Amelework',
    balance: '25000',
    expenses: '869',
    lastpayment: '20 aug 2020',
    chart: [
      { category: 'Services', percentage: '600' },
    { category: 'Healthcare', percentage: '29' },
    { category: 'Restaurants', percentage: '240' },
  ],};
  //fetching the data 
    getUserDetail():Observable<any>{ 
      return of(this.userDetail)
    }
}
