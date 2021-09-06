import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class ExpServiceService {
  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post(baseUrl+'/api/signup', data,{responseType: 'text'});
  }

  verifyUser(data: any) {
    return this.http.post(baseUrl+'/api/login', data);
  }
  
  getUser(data: any) {
    return this.http.get(baseUrl+'/api/getuser', data)
  }

}
