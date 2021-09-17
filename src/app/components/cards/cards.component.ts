import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  bankName : any
  link : any

  constructor() { }

  ngOnInit(): void {
  }
 
  

  onClickSubmit(data: any){
    console.log(data.banks)
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


}
