import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-expproject',
  templateUrl: './expproject.component.html',
  styleUrls: ['./expproject.component.css']
})
export class ExpprojectComponent implements OnInit {
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

  public barChartData: ChartDataSets[] = [
    { data: [80, 70, 65, 59,], label: 'Series A' },
    { data: [49, 58, 60, 81], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
