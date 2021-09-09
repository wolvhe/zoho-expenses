import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpServiceService } from 'src/app/services/exp-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:ExpServiceService,private router: Router) { }

  onClickLogin(data:any){
    console.log(data);
    this.login.verifyUser(data)
    .subscribe(
      (response: any) => {
        console.log(response);
        // this.router.navigate(['/'])
        localStorage.setItem('userInfo',JSON.stringify(response));
        this.router.navigate(['/home']);  
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



  ngOnInit(): void {
  }

}
