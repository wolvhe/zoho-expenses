import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allexpenses',
  templateUrl: './allexpenses.component.html',
  styleUrls: ['./allexpenses.component.css']
})
export class AllexpensesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public allexpenses: any = [];
  public obj: any = {};
  public org: string = "";
  data: any = [];

  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      const usermail = JSON.parse(store);
      console.log(usermail);
      this.http.get("https://codingmart-expenses.herokuapp.com/api/getallexpenses/" + usermail.email)
        .subscribe((res) => {
          console.log(res);
          this.allexpenses = res;
          const arr:any=[];
        this.allexpenses.map((i: any) =>{ 
          // console.log(i);
          arr.push( { ...i, status: "approved" } ) 
      });
        console.log(arr);
        this.data=arr;
          // console.log(this.allexpenses);
        });
        

    }
  }

}
