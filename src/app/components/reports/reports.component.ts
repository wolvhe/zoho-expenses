import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  PORT:number = 3000
  baseURL:string = `http://localhost:${this.PORT}/api`

  constructor(private reportService: ReportServiceService) { }

  ngOnInit(): void {
  }

  reportName = new FormControl('')
  businessPurpose = new FormControl('')
  durationFrom = new FormControl('')
  durationTo = new FormControl('')
  associateWithTrip = new FormControl('')
  newReport: any
  allReports:any

  postReport () {
    console.log(this.reportName.value);
    this.newReport = {
      "name": this.reportName.value,
      "businessPurpose": this.businessPurpose.value,
      "durationFrom": this.durationFrom.value,
      "durationTo": this.durationTo.value,
      "associateWithTrip": this.associateWithTrip.value,
      "status": "DRAFT"
    }
    console.log(this.newReport);
    
    this.reportService.createReport(this.newReport).subscribe(res => {
      console.log(res);
      
    })
    // this.reportService.getAllReports().subscribe(reports => {
    //   this.allReports = reports
    //   console.log(reports);
      
    // })

    
  }

}
