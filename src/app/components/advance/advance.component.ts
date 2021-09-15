import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css', '../homepage/homepage.component.css', '../dashboard/dashboard.component.css']
})
export class AdvanceComponent implements OnInit {
  [x: string]: any;
  org: string | undefined;
  obj: any;

  constructor(private advance:TripsService,private router: Router,private serv:ExpServiceService) { }
  onClickSubmit(data:any){
    data.email=this.email
    // data.push(this.email)
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
      console.log(this.obj.email);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      const email=this.obj.email
      this .email(email)

    }
  }
  email(email:any){
    this.email=email
    
  }

  
}
