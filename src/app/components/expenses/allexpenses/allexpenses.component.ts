import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allexpenses',
  templateUrl: './allexpenses.component.html',
  styleUrls: ['./allexpenses.component.css']
})
export class AllexpensesComponent implements OnInit {

  constructor() { }

  public obj: any = {};
  public org: string = "";
  data: any;
  
  ngOnInit(): void {
  }

}
