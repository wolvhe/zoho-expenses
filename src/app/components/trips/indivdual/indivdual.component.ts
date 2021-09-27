import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-indivdual',
  templateUrl: './indivdual.component.html',
  styleUrls: ['./indivdual.component.css']
})
export class IndivdualComponent implements OnInit {
  id:any;

  isValid = true;
  datas:any;
  data:any;
  constructor(private trip:TripsService,private serv: ExpServiceService,private router:Router,private route:ActivatedRoute) { }

  
  ngOnInit(): void { 
   let a = this.route.snapshot.params['id']
    console.log(a)
    this.id=a
    this.viewtrips()

}

  changeField(): void {
    this.isValid = ! this.isValid;
  }
  viewtrips(){
  this.trip.gettrip(this.id).subscribe(
    data=>{
      this.datas=data
      console.log(this.datas[0])
    }
    
  )
  }

  delete(id:any){
    this.trip.deletetrip(id)
    alert("Deleted")
    this.router.navigateByUrl('/trips/all')
  }

  
}

