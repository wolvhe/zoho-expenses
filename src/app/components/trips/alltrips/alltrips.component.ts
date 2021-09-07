import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
@Component({
  selector: 'app-alltrips',
  templateUrl: './alltrips.component.html',
  styleUrls: ['./alltrips.component.css']
})
export class AlltripsComponent implements OnInit {
  public obj: any = {};
  public org: string = "";
  
  constructor(private trip:TripsService,private serv: ExpServiceService) { }
  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      console.log(res);
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
  elements: any = [
    {date: '12/07/2021', trip: '0001', reference: 'Chickmanglur', amount: '50,000',r_name:'Banglore'},
  ];

  headElements = ['DATE', 'TRIP#', 'REFERENCE#', 'AMOUNT','REPORT NAME'];
  
  trips=Array
  viewtrip(email: any):void{
    console.log(email)
    this.trip.getalltrip(email)
    .subscribe(
      data=>{
        
        console.log(data)
      }
    )
  }
}

