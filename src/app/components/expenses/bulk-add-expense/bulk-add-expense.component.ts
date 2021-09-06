import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-add-expense',
  templateUrl: './bulk-add-expense.component.html',
  styleUrls: ['./bulk-add-expense.component.css']
})
export class BulkAddExpenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterArray(index: any) {
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }
  formArray = [{}]

}
