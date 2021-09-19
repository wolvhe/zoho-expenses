import { Component, OnInit } from '@angular/core';
import { ExpServiceService } from 'src/app/services/exp-service.service';
@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  obj: any;
  org: any;
  name:any;

  constructor(private serv:ExpServiceService) { }

  check(obj: any) {
    // alert("please");
    this.serv.getUser(obj).subscribe((res) => {
      this.org = res;
      console.log(this.obj)
      
    });
  }

  
  ngOnInit(): void {
    
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      // console.log(this.obj.email);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      const email=this.obj.email
      this.name=this.obj.email.split('@')

    }
  }


}
