import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-tabledetails',
  templateUrl: './expense-tabledetails.component.html',
  styleUrls: ['./expense-tabledetails.component.css']
})
export class ExpenseTabledetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }
expense:any={};
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
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
      this.http.get("http://localhost:3000/api/getexpense/" + this.id,httpOptions)
        .subscribe((res) => {
          console.log(res);
         this.expense=res;
        });


    }
  }

  files: File[] = [];


  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }




}
