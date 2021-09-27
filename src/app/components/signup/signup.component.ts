import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpServiceService } from 'src/app/services/exp-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup:ExpServiceService,private router: Router) { }

  onClickSubmit(data:any){
    console.log(data);
    this.signup.createUser(data)
    .subscribe(
      (response: any) => {
        console.log("suc "+response);
        this.router.navigate(['/login'])
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
