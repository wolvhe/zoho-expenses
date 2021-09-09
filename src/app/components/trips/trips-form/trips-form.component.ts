import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
@Component({
  selector: 'app-trips-form',
  templateUrl: './trips-form.component.html',
  styleUrls: ['./trips-form.component.css']
})
export class TripsFormComponent implements OnInit {
  
  
  constructor(private trip:TripsService,private router: Router) { 
    var ttype=true;
  }
 
  // f_details{f_time,f_depart}
  onClickSubmit(data:any){
    console.log(data);
    const Travel_type=data.Travel_type
    const Tripname=data.Tripname
    const Business_Purpose=data.Business_Purpose
    // flight
    const f_optradio=data.f_optradio
    const f_Departure_From=data.f_Departure_From
    const f_Arrive_At=data.f_Arrive_At
    const f_Departure_date=data.f_Departure_date
    const f_Arrival_date=data.f_Arrival_date
    const f_Description=data.f_Description

    const flight1={
      f_optradio,
      f_Departure_From,
      f_Arrive_At,
      f_Departure_date,
      f_Arrival_date,
      f_Description

    }
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
    const data1={
      Travel_type,
      Tripname,
      Business_Purpose,
      flight1,
      hotel1,
      car1,
      bus1,
      train1
    }
    
    console.log(data1)
    this.trip.createtrip(data)
    .subscribe(
      (response: any) => {
        alert(response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  
  
  
  ngOnInit(): void {

  }

  
}