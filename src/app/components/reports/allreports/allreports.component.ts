import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-allreports',
  templateUrl: './allreports.component.html',
  styleUrls: ['./allreports.component.css']
})
export class AllreportsComponent implements OnInit {

  constructor(private reportService: ReportServiceService) { }

  allReports:any

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe(reports => {
      this.allReports = reports
    })
  }

  isEmpty = false

  reports:any = [
    {
      id: "ER-00001",
      name: "Trip to dolakpur",
      durationFrom: "06/09/2021",
      durationTo: "16/09/2021",
      status: "DRAFT",
      approver: "Gowtham",
      total: "4000",
      toBeReimbursed: "3000"
    },
    {
      id: "ER-00002",
      name: "Trip to China",
      durationFrom: "26/09/2021",
      durationTo: "30/09/2021",
      status: "APPROVED",
      approver: "-",
      total: "40000",
      toBeReimbursed: "0"
    },
    {
      id: "ER-00004",
      name: "Trip to Japan",
      durationFrom: "06/09/2021",
      durationTo: "16/09/2021",
      status: "DRAFT",
      approver: "Gowtham",
      total: "4000",
      toBeReimbursed: "3000"
    }
  ]

}
