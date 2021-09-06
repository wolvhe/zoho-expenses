import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addExpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.css']
})
export class AddExpenseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  
  sortedItems = ['Air Travel Expense', 'Automobile Expense', 'Fuel/Mileage Expense', 'IT and Internet Expense', 'Job Costing', 'Meals and Entertainment', 'Office and Supplies', 'Other Expenses', 'Parking', 'Subcontractor', 'Telephone Expense'];
  searchValue: string = '';

  filterItems() {
    return this.sortedItems.filter(el => el.indexOf(this.searchValue) !== -1);
  }

}

export class data {
  constructor() {
  }
}
