import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { TripsService } from 'src/app/services/trips.service'
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private reportService: ReportServiceService,private trip:TripsService,private serv: ExpServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    const _id = this.activatedRoute.snapshot.params["_id"]
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      this.check(this.obj);
      const email=this.obj.email
      this.name = this.obj.email.split('@')[0]
      this.viewtrip(email)
    }
    // console.log(this.obj.email, _id)
    this.reportService.getReportsByID(this.obj.email, _id).subscribe(res => {
      this.report = res
      this.advanceList = this.report['advanceList']
      this.expenseList = this.report['expenseList']
      // console.log(this.report)
    })


    if (this.advanceList.length === 0) {
      this.trip.getalladvance(this.obj.email).subscribe(res => [
        this.allAdvance = res
      ])
      this.expenseCount = this.allAdvance.length
      this.isNoAdvance = true
    } else {
      this.isNoAdvance = true
    }
    
    if (this.expenseList.length === 0) {
      this.expenseCount = 0
      this.isNoExpense = true
    } else {
      this.http.get(`http://localhost:3000/api/getallexpenses/${this.obj.email}`).subscribe(res => {
        this.allExpenses = res
      })
      this.isNoAdvance = false
    }
  }

  allAdvance:any
  allExpenses:any

  showFiller = false;
  report:any

  datas:any
  public obj: any = {};
  public org: string = "";
  email!: string;
  name!: string

  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      this.org = res;
    });
  }

tripCount:number=0
viewtrip(email: any):void{
  // console.log(email)
  this.trip.getalltrip(email)
  .subscribe(
    data=>{
      this.datas=data
      // console.log(this.datas.length)
      this.tripCount = this.datas.length
      this.email=email
    }
  )}

    newReportName = new FormControl("")
    newBusinessPurpose = new FormControl("")
    newStartDate = new FormControl("")
    newEndDate = new FormControl("")
    newAssociateWithTrip = new FormControl("")

  isNoExpense!:boolean
  expenseList:any
  expenseCount!:number

  isNoAdvance!:boolean
  advanceList:any
  advanceCount!:number
  

  updateReport () {
    const updatedReport = {
      email: this.email,
      // reportName: this.report.reportName,
      newReportName: this.newReportName.value,
      newBusinessPurpose: this.newBusinessPurpose.value,
      newStartDate: this.newStartDate.value,
      newEndDate: this.newEndDate.value,
      newAssociateWithTrip: this.newAssociateWithTrip.value
    }
    this.reportService.updateReport(updatedReport).subscribe (res => {
      console.log(res)
    })
    document.getElementById("updateReportModalCloseButton")?.click()
  }

  status:boolean = true
  paystatus(){
    this.status = !this.status
  }
  onClickSubmit(data:any){
    data.email=this.email
    console.log(this.email)
    // data.push(this.email)
    console.log(data);
    this.trip.createadvance(data)
    .subscribe(
      (response: any) => {
        console.log(response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addExpense(index:number) {
    // console.log(this.allExpenses[index])
    let updateData = {
      expenseId: this.allExpenses[index]['_id'],
      reportId: this.report['_id'],
      amount: this.allExpenses[index]['amount']
    }
    this.reportService.addExpense(updateData).subscribe(res => {
      // console.log(res)
    })
    this.ngOnInit()
  }

  addAdvance(index:number) {
    let updateData = {
      advanceId: this.allAdvance[index]['_id'],
      reportId: this.report['_id'],
      amount: this.allAdvance[index]['amount']
    }
    this.reportService.addAdvance(updateData).subscribe(res => {
      console.log(res)
    })
    this.ngOnInit()
  }
 

  timestampToDate(timestamp:any) {
    let date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  timestampToDateWithTime(timestamp:any) {
    let date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }


}