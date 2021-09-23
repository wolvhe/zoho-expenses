import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-allreports',
  templateUrl: './allreports.component.html',
  styleUrls: ['./allreports.component.css']
})
export class AllreportsComponent implements OnInit {
  email: any;
  datas:any
  constructor(private reportService: ReportServiceService) { }

  allReports:any

  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      // console.log(this.obj);
      this.email = obj.email;
    }
  
    this.reportService.getAllReports(this.email).subscribe(reports => {
      this.allReports = reports
      console.log(reports);
    })
  }

  isEmpty:boolean = false
  isSelected:boolean = false

  // rows = []
  selected:any = []

  columnMode = ColumnMode
  selectionType = SelectionType

  onSelect ({selected}:any) {
    this.selected.splice(0, this.selected.length)
    this.selected.push(...selected)
    // console.log(this.selected.length);
    if (this.selected.length === 0) {
      this.isSelected = false
    } else {
      this.isSelected = true
    }
  }

  onActivate(event:any) {
    // console.log(event);
  }

  delete() {
    for (let document in this.selected) {
      this.reportService.deleteReport(this.selected[document].email, this.selected[document].reportName).subscribe( res => {
        console.log(res);
        this.ngOnInit()
      })
    }
  }

  exportAsCSV() {
    
  }

  add() {
    this.selected.push(this.allReports[1], this.allReports[3])
  }

  update() {
    this.selected = [this.allReports[1], this.allReports[3]]
  }

  remove() {
    this.selected = []
  }
  startDate= new FormControl
  endDate=new FormControl
  associateWithTrip=new FormControl
  businessPurpose=new FormControl
  updateWithEmptyValue=false
  bulkUpdate() {
    var data:any = {
      newStartDate: this.startDate.value,
      newEndDate: this.endDate.value,
      newAssociateWithTrip: this.associateWithTrip.value
    }
    if (this.updateWithEmptyValue) {
      data.newBusinessPurpose = ""
    } else {
      data.newBusinessPurpose = this.businessPurpose.value
    }
    // console.log(data);
    for (let document in this.selected) {
      data.reportName = this.selected[document].reportName,
      data.email = this.selected[document].email
      // console.log(data);

      this.reportService.updateReport(data).subscribe(res => {
        console.log(res);

      })
    }
    this.ngOnInit()
  }
  updateWithEmptyValueCheckBox() {
    if (!this.updateWithEmptyValue) {
      this.businessPurpose.disable()
    } else {
      this.businessPurpose.enable()
    }
    this.updateWithEmptyValue = !this.updateWithEmptyValue
  }


}
