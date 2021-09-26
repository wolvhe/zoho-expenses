import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  addReport(data: any) {
    return this.http.post(baseUrl+'/api/addreport', data,{responseType: 'text'});
  }

  getReport(data: any) {
    return this.http.get(baseUrl+'/api/getreports/'+data);
  }
}
