import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';


@Component({
  selector: 'app-addExpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public email: string = "";
  constructor(private afStorage: AngularFireStorage,private http: HttpClient, private rep: ReportService) { }

  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      // console.log(this.obj);
      this.email = obj.email;
      this.rep.getReport(obj.email).subscribe((res) => {
        console.log(res);
      });
    }
  }

  files: File[] = [];



  addnewreport(report: any) {
    // console.log(report);
    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      report.email = obj.email;
      console.log(report);


      this.rep.addReport(report)
        .subscribe(
          (response: any) => {
            alert("suc " + response);
          },
          (error: any) => {
            console.log(error);
          }
        );

    }

  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  sortedItems = ['Air Travel Expense', 'Automobile Expense', 'Fuel/Mileage Expense', 'IT and Internet Expense', 'Job Costing', 'Meals and Entertainment', 'Office and Supplies', 'Other Expenses', 'Parking', 'Subcontractor', 'Telephone Expense'];
  searchValue: string = '';

  filterItems() {
    return this.sortedItems.filter(el => el.indexOf(this.searchValue) !== -1);
  }

  public images: any[] = [];

  async uploadImage() {
    for (let i = 0; i < this.files.length; i++) {
      const snap = await this.afStorage.upload('/images' + Math.random() + this.files[i], this.files[i]);
      this.getUrl(snap);
    }
    this.files = [];
  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.images.push(url);
    console.log(url);
  }


  addexpense(data: any) {
    console.log(this.files);
    this.uploadImage();
    if (this.email != "") {
      data.email = this.email;
      data.receipts=this.images;
      this.http.post('http://localhost:3000/api/newexpense', data, { responseType: 'text' }).subscribe(
        (response: any) => {
          alert("suc " + response);
          // this.router.navigate(['/login'])

        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

}





