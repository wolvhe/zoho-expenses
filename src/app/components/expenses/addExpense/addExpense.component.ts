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
  files: File[] = [];

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

}

export class data {
  constructor() {
  }
}
