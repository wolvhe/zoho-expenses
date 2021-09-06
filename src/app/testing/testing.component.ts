import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  filterArray(index: any) {
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }
  formArray = [{}]
}
