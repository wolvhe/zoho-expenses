import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

const states = [
  'Expense Details',
  'Expenses by Category',
  'Expenses by Attendee',
  'Expenses by Customer',
  'Expenses by Project',
  'Expenses by Merchant',
  'Expenses by Currency',
  'Expense Reports Details',
  'Policy Voilations',
  'Trip Details',
  'Trip Stage Summary',
  'Trip Summary by Report Status',
  'Activity Logs'
];

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  model: any;

  @ViewChild('instance', { static: true }) instance: NgbTypeahead | any;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? states
          : states.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        )
      )
    );
  };
}