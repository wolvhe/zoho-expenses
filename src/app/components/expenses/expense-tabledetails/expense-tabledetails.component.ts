import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-tabledetails',
  templateUrl: './expense-tabledetails.component.html',
  styleUrls: ['./expense-tabledetails.component.css']
})
export class ExpenseTabledetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  files: File[] = [];


	onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }


  

}
