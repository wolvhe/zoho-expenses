import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }
  createtrip(data: any) {
    return this.http.post(baseUrl+'/trip', data,{responseType: 'text'});
  }
}
