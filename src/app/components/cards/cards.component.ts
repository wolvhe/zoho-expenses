import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
  }

  isCorporate:boolean = false
  isPersonal:boolean = false

  corporateCard() {
    this.isCorporate = true
    this.isPersonal = false
  }

  personalCard() {
    this.isPersonal = true
    this.isCorporate = false
  }

  isDebitCard = new FormControl
  isCreditCard = new FormControl
  name = new FormControl
  currency = new FormControl
  bankName = new FormControl
  billingDate = new FormControl
  description = new FormControl

  postNewManualCard() {
    const data = {
      email: "gowtham758550@gmail.com",
      cardType: "Credit Card",
      accountName: this.name.value,
      currency: this.currency.value,
      bankName: this.bankName.value,
      billinDate: this.billingDate.value,
      description: this.description.value
    }
    if (this.isCorporate) {
      this.cardService.newManualCorporateCard(data).subscribe(res => {
        console.log(res);
      })
    } else {
      this.cardService.newManualPersonalCard(data).subscribe(res => {
        console.log(res);
      })
    }
  }

  customerID = new FormControl
  password = new FormControl

  postNewBankCard() {
    const data = {
      email: "gowtham758550@gmail.com",
      customerID: this.customerID.value,
      password: this.password.value
    }
    if (this.isCorporate) {
      this.cardService.newBankCorporateCard(data).subscribe(res => {
        console.log(res);
      })
    } else {
      this.cardService.newBankPersonalCard(data).subscribe(res => {
        console.log(res);
      })
    }
  }
  

}
