import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { TripsService } from 'src/app/services/trips.service';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-addExpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public email: string = "";
status:any
  check: boolean;
  reports:any=[];
  datas: any;

  constructor(private afStorage: AngularFireStorage,private SpinnerService: NgxSpinnerService,private http: HttpClient,private trip:TripsService, private rep: ReportServiceService) {
    this.status = true
    this.check=false
   }


  ngOnInit(): void {
    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      // console.log(this.obj);
      this.email = obj.email;
      this.rep.getAllReports(obj.email).subscribe((res) => {
        console.log(res);
        this.reports=res;
      });
    }
    this.viewtrip(this.email) 
  }

  files: File[] = [];


	onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  filterArray(index: any) {
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }
  formArray = [{}]

paystatus(){
  this.status = !this.status
}

paycheck(){
  this.check = !this.check
}



   

  addnewreport(report: any) {
    // console.log(report);
    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      report.email = obj.email;
      console.log(report);


      this.rep.createReport(report)
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

  


  sortedItems = ['Air Travel Expense', 'Automobile Expense', 'Fuel/Mileage Expense', 'IT and Internet Expense', 'Job Costing', 'Meals and Entertainment', 'Office and Supplies', 'Other Expenses', 'Parking', 'Subcontractor', 'Telephone Expense'];
  searchValue: string = '';

  filterItems() {
    return this.sortedItems.filter(el => el.indexOf(this.searchValue) !== -1);
  }

  public images: any[] = [];

  async uploadImage(data:any) {
    this.SpinnerService.show();

    for (let i = 0; i < this.files.length; i++) {
      const snap = await this.afStorage.upload('/images' + Math.random() + this.files[i], this.files[i]);
      this.getUrl(snap);
    }
    // this.files = [];
    const wait = setInterval(() => {
      if (this.files.length == this.images.length) {
        // alert("done");
        console.log("uploaded")
        this.SpinnerService.hide();

        this.files = [];
        // this.images = [];
        this.submitexpenses(data)
        clearInterval(wait);
      }

    }, 1000);
  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.images.push(url);
    console.log(url);
  }


  addexpense(data: any) {
    console.log(this.files);
    this.uploadImage(data);
    
  }

  submitexpenses(data:any){
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
  viewtrip(email: any):void{
    console.log(email)
    this.trip.getalltrip(email)
    .subscribe(
      (data: any)=>{
        this.datas=data
        console.log(this.datas)
      }
    )}

}





