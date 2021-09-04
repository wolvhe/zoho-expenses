import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TripsService } from 'src/app/services/trips.service';
@Component({
  selector: 'app-trips-form',
  templateUrl: './trips-form.component.html',
  styleUrls: ['./trips-form.component.css']
})
export class TripsFormComponent implements OnInit {
  mode_of_transport!: string;
  // constructor(private trip:TripsService,private router: Router) { }

  onClickSubmit(data:any){
    console.log(data);
    // this.trip.createtrip(data)
    // .subscribe(
    //   (response: any) => {
    //     alert(response);
    //     this.router.navigate(['/trip'])
        
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  ngOnInit(): void {
  }

}