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
    this.reportService.getAllReports("email@example.com").subscribe(reports => {
      this.allReports = reports
    })
  }

  isEmpty = false

}
