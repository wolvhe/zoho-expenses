import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-allreports',
  templateUrl: './allreports.component.html',
  styleUrls: ['./allreports.component.css']
})
export class AllreportsComponent implements OnInit {

  constructor(private reportService: ReportServiceService) { }

  allReports:any

  ngOnInit(): void {
    this.reportService.getAllReports("gowtham758550@gmail.com").subscribe(reports => {
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


}
