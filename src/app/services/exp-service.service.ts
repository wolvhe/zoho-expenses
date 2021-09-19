import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const baseUrl = 'https://codingmart-expenses.herokuapp.com';

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
  
  getUser(data:any) {
    // console.log(data);
    
    return this.http.get(baseUrl+'/api/getname/'+data.email,{responseType: 'text'});
    // .pipe(map(() => {})).subscribe(() => {
    //   console.log("hi");
    // });
  }

}
