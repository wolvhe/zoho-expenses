import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advancemodel } from '../models/advancemodel';
import { Tripmodel } from '../models/tripmodel';
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }
  createtrip(data: any) {
    return this.http.post(baseUrl+'/api/trip', data,{responseType: 'text'});
  }
  getalltrip(data:any){
    return this.http.get<Tripmodel>(baseUrl+'/api/gettrip/'+data);
  } 
  createadvance(data:any){
    return this.http.post(baseUrl+'/api/advance',data,{responseType:'text'});
  }
  getalladvnace(data:any){
    return this.http.get<Advancemodel>(baseUrl+'/api/getadvance/'+data);
  }
}
