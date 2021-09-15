import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importcsv',
  templateUrl: './importcsv.component.html',
  styleUrls: ['./importcsv.component.css']
})
export class ImportcsvComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  csvToArray(str:any, delimiter = ',') {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row:any) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object:any, header:any, index:any) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }
  
  convertFile = () => {
    const input:any = document.getElementById('fileInput');
  
    const reader:any = new FileReader();
    reader.onload = () => {
      let text = reader.result;
      let data = this.csvToArray(text)
      console.log(JSON.stringify(data[0]));
    };
    reader.readAsText(input.files[0]);
    
  };
}