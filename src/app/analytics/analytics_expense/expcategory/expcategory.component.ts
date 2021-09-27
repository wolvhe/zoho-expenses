import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType,ChartDataset} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-expcategory',
  templateUrl: './expcategory.component.html',
  styleUrls: ['./expcategory.component.css']
})
export class ExpcategoryComponent implements OnInit {
  isShowDiv = false;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81], label: 'Series A' },
    { data: [28, 48, 40, 19], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
