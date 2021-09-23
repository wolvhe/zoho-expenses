import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-bulk-add-expense',
  templateUrl: './bulk-add-expense.component.html',
  styleUrls: ['./bulk-add-expense.component.css']
})
export class BulkAddExpenseComponent implements OnInit {
  files: File[] = [];
  public images: any[] = [];
  public receipt: any[] = [];
  public email: string = "";

  // start = 0;
  // finish=0;

  public obj = {
    exp_date: "",
    merchant: "",
    category: "",
    amounttype: "INR",
    amount: "",
    paid_through: "",

    description: "",
    reference: "",
    add_to_report:"",

    receipts: this.receipt
  }
  formArray = [this.obj]


  constructor(private http: HttpClient,private SpinnerService: NgxSpinnerService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {

    const store = localStorage.getItem('userInfo');
    if (store) {
      const obj = JSON.parse(store);
      // console.log(this.obj);
      this.email = obj.email;
    
    }
  }
  onSelect(event: any, i: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadImage(i);
  }


  async uploadImage(j: any) {
    this.SpinnerService.show();
    for (let i = 0; i < this.files.length; i++) {
      const snap = await this.afStorage.upload('/images' + Math.random() + this.files[i], this.files[i]);
      this.getUrl(snap, j);
    }
    // this.start+=this.files.length;
    const wait = setInterval(() => {
      if (this.files.length == this.images.length) {
        // alert("done");
        console.log("uploaded")
        this.SpinnerService.hide();

        this.files = [];
        this.images = [];
        clearInterval(wait);
      }

    }, 1000);

  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot, i: any) {
    const url = await snap.ref.getDownloadURL();
    this.images.push(url);
    console.log(i + " " + url);
    this.formArray[i].receipts = this.images;
    // this.finish+=this.images.length;
    // this.images = [];
    // this.receipt = [];

  }
  // onSelect(event: any, i: any) {
  //   console.log(this.formArray[0].receipts);

  //   // console.log(event);
  //   console.log(i);
  //   this.files.push(...event.addedFiles);
  //   console.log("***"+this.files.length);
  //   this.formArray[i].receipts.push(...this.files);
  //   this.files.length=0;
  //   console.log(this.files);
  //   console.log(this.formArray[0].receipts);

  // }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  filterArray(index: any) {
    this.formArray = this.formArray.filter((d, i) => i != index)
  }

  onsubmit(data: any) {
    console.log(data);
  }

  addexpense() {
    // this.files.length=0;
    // console.log(this.files);
    // this.files.push({});
    this.formArray.push({
      exp_date: "",
      merchant: "",
      category: "",
      amounttype: "INR",
      amount: "",
      paid_through: "",
      description: "",
      reference: "",
      add_to_report:"",
      receipts: this.receipt
    })
  }

  addall() {
    console.log("uploed")
    console.log(this.formArray);
    if (this.email != "") {
      const data={
        email:this.email,
        bulkexpenses:this.formArray
      }
      this.http.post('https://codingmart-expenses.herokuapp.com/api/bulkexpenses', data, { responseType: 'text' }).subscribe(
        (response: any) => {
          alert("suc " + response);
          // this.router.navigate(['/login'])
          this.formArray=[{
            exp_date: "",
            merchant: "",
            category: "",
            amounttype: "INR",
            amount: "",
            paid_through: "",
        
            description: "",
            reference: "",
            add_to_report:"",
        
            receipts: this.receipt
          }];

        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

}
