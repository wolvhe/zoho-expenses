import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Tripmodel } from 'src/app/models/tripmodel';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltrips',
  templateUrl: './alltrips.component.html',
  styleUrls: ['./alltrips.component.css']
})
export class AlltripsComponent implements OnInit {
  public obj: any = {};
  public org: string = "";
  datas: any;
  checkbox:boolean
  
  constructor(private trip:TripsService,private serv: ExpServiceService,private router:Router) { 
    this.checkbox=false
  }
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

  
  
  trips=Array
  viewtrip(email: any):void{
    console.log(email)
    this.trip.getalltrip(email)
    .subscribe(
      data=>{
        this.datas=data
        console.log(this.datas)
        console.log(this.datas.flight[0].f_type)
        console.log(this.datas)
      }
    )
  }
  navbar(){
    this.checkbox=!this.checkbox
  }
  handleSelected($event:any) {
    if ($event.target.checked === true) {
    // Handle your code
    }
 }
 save(){
  this.router.navigateByUrl('/trips/all')
 }
  
  // getClassColor({status}) {
  //   console.log(status)
  //   return "color:green";
  // }
}

