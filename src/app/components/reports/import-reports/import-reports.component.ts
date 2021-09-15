import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-reports',
  templateUrl: './import-reports.component.html',
  styleUrls: ['./import-reports.component.css']
})
export class ImportReportsComponent implements OnInit {

  options: string[] = ["UTF-8 (Unicode)", "UTF-16 (Unicode)"]

  constructor() { }

  ngOnInit(): void {
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
      console.log(JSON.stringify(data));
    };
    reader.readAsText(input.files[0]);
    
  };

  files: File[] = []

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer | any>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = e => {
        return resolve((e.target as FileReader).result)
      }

      reader.onerror = e => {
        console.error('filereader failed');
        return reject(null)
      }

      if (!file) {
        console.error('No file to read');
        return reject(null)
        
      }

      reader.readAsText(file)
    })
  }

  onSelect(event:any) {
    // console.log(event);
    this.files.push(...event.addedFiles);

    this.readFile(this.files[0]).then(fileContents => {
      // console.log(fileContents);
      console.log(this.csvToArray(fileContents));
      
    })
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
