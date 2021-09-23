import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-expmerchant',
  templateUrl: './expmerchant.component.html',
  styleUrls: ['./expmerchant.component.css']
})
export class ExpmerchantComponent implements OnInit {
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
    { data: [55, 30, 45, 41,], label: 'Series A' },
    { data: [49, 58, 52, 31], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
