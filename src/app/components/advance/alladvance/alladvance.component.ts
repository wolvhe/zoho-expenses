import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Advancemodel } from 'src/app/models/advancemodel';
@Component({
  selector: 'app-alladvance',
  templateUrl: './alladvance.component.html',
  styleUrls: ['./alladvance.component.css']
})
export class AlladvanceComponent implements OnInit {
  public obj: any = {};
  public org: string = "";
  
  datas!: any;
  
  constructor(private trip: TripsService, private serv: ExpServiceService) { }

  check(obj: any) {
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
      const email = this.obj.email
      this.viewadvance(email)

    }
  }

  // elements: any = [
  //     {date: '12/07/2021', trip: '0001', reference: 'Chickmanglur', amount: '50,000',r_name:'Banglore'},
  //   ];

  headElements = ['DATE', 'TRIP#', 'REFERENCE#', 'AMOUNT', 'REPORT NAME'];


  viewadvance(email: any): void {
    console.log(email)
    this.trip.getalladvnace(email)
      .subscribe(
        data => {

          this.datas=data
          
          console.log(data)
          
        }
      )
  }
  
  }
  




