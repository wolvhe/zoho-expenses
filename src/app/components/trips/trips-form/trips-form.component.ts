import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
@Component({
  selector: 'app-trips-form',
  templateUrl: './trips-form.component.html',
  styleUrls: ['./trips-form.component.css']
})
export class TripsFormComponent implements OnInit {
  org: string | undefined;
  obj: any;
  international :any
  
  constructor(private trip:TripsService,private router: Router,private serv: ExpServiceService) { this.international=false }
  // f_details{f_time,f_depart}
  onClickSubmit(data:any){
    console.log(data);
    const travel_type=data.Travel_type
    const trip_no=0
    const trip_name=data.Tripname
    const business_purpose=data.Business_Purpose
    const designation_country=data.Designation_Country
    const visa=data.Visa
    // flight
    const f_type=data.f_type
    const f_Departure_From=data.f_Departure_From
    const f_Arrive_At=data.f_Arrive_At
    const f_Departure_date=data.f_Departure_date
    const f_Arrival_date=data.f_Arrival_date
    const f_Description=data.f_Description

    const flight1={
      f_type,
      f_Departure_From,
      f_Arrive_At,
      f_Departure_date,
      f_Arrival_date,
      f_Description
    }
    const flight2=[]
    flight2.push(flight1)
    // Hotel
    const h_location=data.h_location
    const h_check_in=data.h_check_in
    const h_check_out=data.h_check_out
    const h_description=data.h_description

    const hotel1={
      h_location,
      h_check_in,
      h_check_out,
      h_description
    }
    const hotel2=[]
    hotel2.push(hotel1)
    // car
    const c_pick_up_date=data.c_pick_up_date
    const c_pick_up_time=data.c_pick_up_time
    const c_pick_up_city=data.c_pick_up_city
    const c_drop_off_date=data.c_drop_off_date
    const c_drop_off_time=data.c_drop_off_time
    const c_drop_off_city=data.c_drop_off_city
    const c_type=data.c_type
    const c_description=data.c_description

    const car1={
      c_pick_up_date,
      c_pick_up_time,
      c_pick_up_city,
      c_drop_off_date,
      c_drop_off_time,
      c_drop_off_city,
      c_type,
      c_description
    }

    const car2=[]
    car2.push(car1)
    //bus

    const b_Departure_from=data.b_Departure_from
    const b_Arrive_At=data.b_Arrive_At
    const b_Departure_date=data.b_Departure_date
    const b_description=data.b_description

    const bus1={
      b_Departure_from,
      b_Arrive_At,
      b_Departure_date,
      b_description
    }

    const bus2=[]
    bus2.push(bus1)
    // train
    const t_Departure_from=data.t_Departure_from
    const t_Arrive_At=data.t_Arrive_At
    const t_Departure_date=data.t_Departure_date
    const t_description=data.t_description

    const train1={
      t_Departure_from,
      t_Arrive_At,
      t_Departure_date,
      t_description
    }

    const train2=[]
    train2.push(train1)
    
    
    // email
    const email=this.obj.email

    const data1={
      email,
      trip_no,
      travel_type,
      trip_name,
      business_purpose,
      designation_country,
      visa,
      flight2,
      hotel2,
      car2,
      bus2,
      train2
    }
    
    console.log(data1)
    this.trip.createtrip(data1)
    .subscribe(
      (response: any) => {
        alert(response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      this.org = res;
    });
  }

  
  ngOnInit(): void {
    this.international = false
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      // console.log(this.obj.email);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      const email=this.obj.email

    }
  }

  regionfalse()
  {
    this.international = false
  }
  region()
  {
    this.international = true
  }
  
  }
  
