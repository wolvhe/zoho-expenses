import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allexpenses',
  templateUrl: './allexpenses.component.html',
  styleUrls: ['./allexpenses.component.css']
})
export class AllexpensesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  public allexpenses: any = [];
  public obj: any = {};
  public org: string = "";
  data: any = [];

  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      const usermail = JSON.parse(store);
      console.log(usermail);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'email': usermail.email
          // Authorization: 'my-auth-token'https://codingmart-expenses.herokuapp.com
        })
      };
      this.http.get("http://localhost:3000/api/getallexpenses/" + usermail.email,httpOptions)
        .subscribe((res) => {
          console.log(res);
          this.allexpenses = res;
          const arr: any = [];
          this.allexpenses.map((i: any) => {
            // console.log(i);
            arr.push({ ...i, status: "approved" })
          });
          console.log(arr);
          this.data = arr;
          // console.log(this.allexpenses);
        });


    }
  }

  viewexpenses(id: any) {
    console.log(id)
    this.router.navigate([`tab/all/detail/${id}`])
  }

}
