import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpServiceService } from 'src/app/services/exp-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public obj: any = {};
  public org: string = "";

  name:any;

  constructor(private router: Router, private serv: ExpServiceService) { }

  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      console.log(res);
      this.org = res;
    });
  }
  
  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      console.log(this.obj);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      this.name=this.obj.email.split('@')
    }
  }

  onClickLogout() {
    this.router.navigate(['/login']);
    localStorage.clear()
  }
}
