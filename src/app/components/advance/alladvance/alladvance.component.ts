import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { Router } from '@angular/router';
import { Advancemodel } from 'src/app/models/advancemodel';


@Component({
  selector: 'app-alladvance',
  templateUrl: './alladvance.component.html',
  styleUrls: ['./alladvance.component.css']
})
export class AlladvanceComponent implements OnInit {
  [x: string]: any;
  public obj: any = {};
  public org: string = "";
  temp = []
  rows!: any;
  amount!: string;
  
  
  constructor(private trip: TripsService, private serv: ExpServiceService,private router:Router) { }

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
  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d: { apply_to_trip: string; }) {
      return d.apply_to_trip.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
    
  }
  // elements: any = [
  //     {date: '12/07/2021', trip: '0001', reference: 'Chickmanglur', amount: '50,000',r_name:'Banglore'},
  //   ];

  headElements = ['DATE', 'TRIP#', 'REFERENCE#', 'AMOUNT', 'REPORT NAME'];


  viewadvance(email: any): void {
    console.log(email)
    this.trip.getalladvance(email)
      .subscribe(
        data => {

          this.rows=data
          
          console.log(this.rows)
          
        }
      )
  }

  viewindadvances(id:any){
 
    console.log(id)
    this.router.navigate([`/indivadvance/${id}`])
  }
 
  
  
}




