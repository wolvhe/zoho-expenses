import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
  showFiller = false;

  ngOnInit(): void {
  }

  isNoExpense:boolean=true
  expenseCount!:number

  isNoAdvance:boolean=true
  advanceCount!:number


  
  
}
