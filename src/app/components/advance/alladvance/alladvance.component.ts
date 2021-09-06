import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alladvance',
  templateUrl: './alladvance.component.html',
  styleUrls: ['./alladvance.component.css']
})
export class AlladvanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
      {date: '12/07/2021', trip: '0001', reference: 'Chickmanglur', amount: '50,000',r_name:'Banglore'},
    ];
  
    headElements = ['DATE', 'TRIP#', 'REFERENCE#', 'AMOUNT','REPORT NAME'];
  
  
}
