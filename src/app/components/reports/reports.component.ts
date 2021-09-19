import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { TripsService } from 'src/app/services/trips.service'
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public obj: any = {};
  public org: string = "";
  datas: any;

  PORT:number = 3000
  baseURL:string = `http://localhost:${this.PORT}/api`

  constructor(private reportService: ReportServiceService,private trip:TripsService,private serv: ExpServiceService,private router:Router) { }

  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      this.org = res;
    });
  }
  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      // console.log(this.obj.email);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      const email=this.obj.email
      this.viewtrip(email)
  }

  }
  viewtrip(email: any):void{
    console.log(email)
    this.trip.getalltrip(email)
    .subscribe(
      data=>{
        this.datas=data
        console.log(this.datas)
        this.email=email
      }
    )}

  email!: string;

  reportName = new FormControl('')
  businessPurpose = new FormControl('')
  startDate = new FormControl('')
  endDate = new FormControl('')
  associateWithTrip = new FormControl('')
  newReport: any
  allReports:any

  postReport () {
    console.log(this.reportName.value);
    this.newReport = {
      "email": this.email,
      "reportName": this.reportName.value,
      "businessPurpose": this.businessPurpose.value,
      "startDate": this.startDate.value,
      "endDate": this.endDate.value,
      "associateWithTrip": this.associateWithTrip.value,
      "status": "approved"
    }
    console.log(this.newReport);
    
    this.reportService.createReport(this.newReport).subscribe(res => {
      console.log(res);
      
    })
    // this.reportService.getAllReports().subscribe(reports => {
    //   this.allReports = reports
    //   console.log(reports);
      
    // })
    this.router.navigateByUrl('/reports/all')
    
  }

}
