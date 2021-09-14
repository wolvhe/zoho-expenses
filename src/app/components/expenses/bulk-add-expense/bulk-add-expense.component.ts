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
  files: File[] = [];

	onSelect(event: any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  filterArray(index: any) {
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }
  formArray = [{exp_date:"",merchant:""}]

  onsubmit(data: any){
    console.log(data);
  }

  addexpense(){
    this.formArray.push({exp_date:"",merchant:""})
  }

}
