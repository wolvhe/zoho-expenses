import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Tripmodel } from 'src/app/models/tripmodel';
import { ColumnMode } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-alltrips',
  templateUrl: './alltrips.component.html',
  styleUrls: ['./alltrips.component.css']
})
export class AlltripsComponent implements OnInit {
  public obj: any = {};
  public org: string = "";
  datas: any;
  
  constructor(private trip:TripsService,private serv: ExpServiceService) { }
  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      this.org = res;
    });
  }
  ColumnMode = ColumnMode;
  
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

  // getRowClass() {
  //   console.log('rowClass')
  //   return {
  //     'row-color': true
  //   }
  // }

  
  // getClassColor({status}) {
  //   console.log(status)
  //   return "color:green";
  // }
}

