import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  baseURL = "localhost:3000"

  constructor(private http: HttpClient) { }

  createReport(data:any): Observable<any> {
    console.log(data);
    return this.http.post('http://localhost:3000/api/reports/new', data)
  }

  allReports:any
  getAllReports(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/reports')
  }

  archieveReport(data:any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/reports/edit', data)
  }
}
