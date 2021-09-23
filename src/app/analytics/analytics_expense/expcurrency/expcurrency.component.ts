import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-expcurrency',
  templateUrl: './expcurrency.component.html',
  styleUrls: ['./expcurrency.component.css']
})
export class ExpcurrencyComponent implements OnInit {

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
    { data: [41, 18, 25, 21,], label: 'Series A' },
    { data: [35, 28, 32, 31], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
