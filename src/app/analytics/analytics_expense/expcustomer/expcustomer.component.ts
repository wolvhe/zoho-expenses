import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-expcustomer',
  templateUrl: './expcustomer.component.html',
  styleUrls: ['./expcustomer.component.css']
})
export class ExpcustomerComponent implements OnInit {

  isShowDiv = false;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [80, 48, 40, 19], label: 'Series A' },
    { data: [65, 59, 30, 81], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
