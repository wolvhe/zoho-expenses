import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseURL = "https://codingmart-expenses.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  newManualCorporateCard(data:any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}/cards/new/corporate/manual`, data)
  }

  newManualPersonalCard(data:any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}/cards/new/personal/manual`, data)
  }

  newBankCorporateCard(data:any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}/cards/new/corporate/bank`, data)
  }

  newBankPersonalCard(data:any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}/cards/new/personal/bank`, data)
  }
}
