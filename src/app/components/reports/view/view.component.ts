import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private reportService: ReportServiceService) { }

  ngOnInit(): void {
  }

  report = {
    reportName: 'trip to karnataka'
  }

  updateReportForm = new FormGroup ({
    reportName: new FormControl(''),
    businessPurpose: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    associateWithTrip: new FormControl('')
  })

  isNoExpense:boolean=true
  expenseCount!:number

  isNoAdvance:boolean=true
  advanceCount!:number

  updateReport () {
    console.log(this.updateReportForm.value);
  }

  linkExistingExpense () {

  }

  linkNewExpense () {

  }

  linkExistingAdvance () {

  }

  linkNewAdvance () {
    
  }
}