import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';


@Component({
  selector: 'app-approval-trips',
  templateUrl: './approval-trips.component.html',
  styleUrls: ['./approval-trips.component.css']
})
export class ApprovalTripsComponent implements OnInit {
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
        console.log(this.datas)
      }
    )
  }


}

