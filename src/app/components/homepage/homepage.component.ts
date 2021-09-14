import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExpServiceService } from 'src/app/services/exp-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private serv:ExpServiceService) { }

  ngOnInit(): void {
  }

}
