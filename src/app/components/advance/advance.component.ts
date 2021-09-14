import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {

  constructor(private advance:TripsService,private router: Router) { }
  onClickSubmit(data:any){
    console.log(data);
    this.advance.createadvance(data)
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
