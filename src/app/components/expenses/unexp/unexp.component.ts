import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unexp',
  templateUrl: './unexp.component.html',
  styleUrls: ['./unexp.component.css']
})
export class UnexpComponent implements OnInit {

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
