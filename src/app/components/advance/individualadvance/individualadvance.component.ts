import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individualadvance',
  templateUrl: './individualadvance.component.html',
  styleUrls: ['./individualadvance.component.css']
})
export class IndividualadvanceComponent implements OnInit {
  id: any;
  datas:any;

  constructor(private trip:TripsService,private serv: ExpServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let a = this.route.snapshot.params['id']
    console.log(a)
    this.id=a
    this.viewadvance()
  }
  viewadvance(){
    this.trip.getadvance(this.id).subscribe(
      data=>{
        this.datas=data
        console.log(this.datas[0])
      }
      
    )
    }

}
