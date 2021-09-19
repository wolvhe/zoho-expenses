import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';
import { ExpServiceService } from 'src/app/services/exp-service.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  obj: any;
  org: string | undefined;

  constructor(private cardService: CardsService,private serv: ExpServiceService) { }
  bankName : any
  link : any

  ngOnInit(): void {
    
    const store = localStorage.getItem('userInfo');
    if (store) {
      this.obj = JSON.parse(store);
      // console.log(this.obj.email);
      // this.serv.getUser(this.obj.email);
      this.check(this.obj);
      const email=this.obj.email
      console.log(email)
  }
}
check(obj: any) {
  // alert("please");
  this.serv.getUser(obj).subscribe((res) => {
    this.org = res;

  });
  this.email=this.obj.email
}
 
  

  onClickSubmit(data: any){
    console.log(data)
    this.bankName = data.banks

    if(this.bankName=="121 Financial Credit Union - Bank"){
      this.link="https://secure.121fcu.org/121financialcredituniononline_41/Uux.aspx#/login"
    }
    else if(this.bankName=="1880 Bank"){
      this.link="https://secure.fundsxpress.com/DigitalBanking/fx?iid=NBCCMD"
    }
    else if(this.bankName=="1st Advantage FCU - Bank"){
      this.link="https://members.1stadvantage.org/auth/SignIn?wa=wsignin1.0&wtrealm=https%3A%2F%2Fmembers.1stadvantage.org%2Fbanking%2F&wctx=rm%3D0%26id%3Dpassive%26ru%3D%252fbanking%252fstart%252fISuite5%252fFeatures%252fAuth%252fMFA%252fDefault.aspx&wct=2021-05-27T08%3A11%3A57Z"
    }
    else if(this.bankName=="1st Advantage FCU - Credit Cards"){
      this.link="https://apphx.pscu.com/AP/APCardholder/pages/dsologin?clientId=5719&siteFlag=true"
    }
    else if(this.bankName=="1st Bank (Cash Mangement) - Bank"){
      this.link="https://www.efirstbank.com/centralAuthICM/jsp/main/Logon.faces"
    }
    else if(this.bankName=="1st Bank (WY) - Bank"){
      this.link="https://www.netteller.com/login2008/Authentication/Views/Login.aspx?returnUrl=%2fglacierfamily&isJsAssigningValues=false"
    }
    else if(this.bankName=="1st Bank in Hominy - Bank"){
      this.link="https://fnbihok.secure.fundsxpress.com/DigitalBanking/fx?iid=FNBIHOK"
    }
    else if(this.bankName=="1st Bank of Sea Isle City (Business) - Bank"){
      this.link="https://web2.secureinternetbank.com/EBC_EBC1961/EBC1961.ashx?wci=process&wce=request&rid=3000&rtn=231271242&rt=231271242&mfa=2"
    }
    else if(this.bankName=="1st Bank of Sea Isle City - Bank"){
      this.link="https://retailonline.fiservapps.com/Login/231271242/"
    }
    else if(this.bankName=="1st Bank Yuma"){
      this.link="https://secure.1stbankyuma.com/engine/login/login.asp"
    }

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
  // bankName = new FormControl
  billingDate = new FormControl
  description = new FormControl

  postNewManualCard() {
    const data = {
      email: this.email,
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

  email!: string;
 
  

  customerID1 = new FormControl
  password1 = new FormControl

  postNewBankCard1() {
    const data = {
      email: this.email,
      customerID: this.customerID1.value,
      password: this.password1.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }

  customerID2 = new FormControl
  password2 = new FormControl

  postNewBankCard2() {
    const data = {
      email: this.email,
      customerID: this.customerID2.value,
      password: this.password2.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  

  customerID3 = new FormControl
  password3 = new FormControl

  postNewBankCard3() {
    const data = {
      email: this.email,
      customerID: this.customerID3.value,
      password: this.password3.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  

  customerID4 = new FormControl
  password4 = new FormControl

  postNewBankCard4() {
    const data = {
      email: this.email,
      customerID: this.customerID4.value,
      password: this.password4.value
    }
    
    console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  

  customerID5 = new FormControl
  password5 = new FormControl

  postNewBankCard5() {
    const data = {
      email: this.email,
      customerID: this.customerID5.value,
      password: this.password5.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  

  customerID6 = new FormControl
  password6 = new FormControl

  postNewBankCard6() {
    const data = {
      email: this.email,
      customerID: this.customerID6.value,
      password: this.password6.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  

  customerID7 = new FormControl
  password7 = new FormControl

  postNewBankCard7() {
    const data = {
      email: this.email,
      customerID: this.customerID7.value,
      password: this.password7.value
    }
    // console.log(data);
    this.cardService.newBankCorporateCard(data).subscribe(res => {
      console.log(res);
      
    })
  }
  
  

}
