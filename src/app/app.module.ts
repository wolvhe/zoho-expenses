import { TabComponent } from './components/expenses/tab/tab.component';
import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TripsComponent } from './components/trips/trips.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MysettingsComponent } from './components/mysettings/mysettings.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './home/home.component';
import { TripsFormComponent } from './components/trips/trips-form/trips-form.component';
import { AlltripsComponent } from './components/trips/alltrips/alltrips.component';
import { BasicinfoComponent } from './components/mysettings/basicinfo/basicinfo.component';
import { PreferencesComponent } from './components/mysettings/preferences/preferences.component';
import { TravelDocsComponent } from './components/mysettings/travel-docs/travel-docs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddExpenseComponent } from './components/expenses/addExpense/addExpense.component';
import { AllreportsComponent } from './components/reports/allreports/allreports.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { ImportcsvComponent } from './components/importcsv/importcsv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlladvanceComponent } from './components/advance/alladvance/alladvance.component';
import { TestingComponent } from './testing/testing.component';
import { MatSearchableSelectModule } from 'mat-searchable-select';
import { NgxDropzoneComponent, NgxDropzoneModule } from 'ngx-dropzone';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ApprovalPageComponent } from './components/approval-page/approval-page.component';
import { ApprovalTripsComponent } from './components/approval-page/approval-trips/approval-trips.component';
import { ApprovalReportComponent } from './components/approval-page/approval-report/approval-report.component';
import { PendingApprovalPageComponent } from './components/approval-page/pending-approval-page/pending-approval-page.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage'

import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ImportReportsComponent } from './components/reports/import-reports/import-reports.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdvancepageComponent } from './home/advancepage/advancepage.component';
import { ReportspageComponent } from './home/reportspage/reportspage.component';
import { ExpensespageComponent } from './home/expensespage/expensespage.component';
import { TripspageComponent } from './home/tripspage/tripspage.component';
import { CardspageComponent } from './home/cardspage/cardspage.component';
import { ApprovalpageComponent } from './home/approvalpage/approvalpage.component';
import { MysettingspageComponent } from './home/mysettingspage/mysettingspage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TabspageComponent } from './home/approvalpage/tabspage/tabspage.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { AllexpensesComponent } from './components/expenses/allexpenses/allexpenses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticspageComponent } from './home/analyticspage/analyticspage.component';
import { BulkaddreportsComponent } from './home/reportspage/bulkaddreports/bulkaddreports.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    TripsComponent,
    ExpensesComponent,
    ReportsComponent,
    MysettingsComponent,
    CardsComponent,
    HomeComponent,
    TripsFormComponent,
    AlltripsComponent,
    BasicinfoComponent,
    PreferencesComponent,
    TravelDocsComponent,
    AddExpenseComponent,
    BulkAddExpenseComponent,
    FromCardsComponent,
    TabComponent,
    AllreportsComponent,
    AdvanceComponent,
    ImportcsvComponent,
    TabComponent,
    AlladvanceComponent,
    TestingComponent,
    HomepageComponent,
    ApprovalPageComponent,
    ApprovalReportComponent,
    ApprovalTripsComponent,
    PendingApprovalPageComponent,
    ImportReportsComponent,
    AlltripsComponent,
    AdvancepageComponent,
    ReportspageComponent,
    ExpensespageComponent,
    TripspageComponent,
    CardspageComponent,
    ApprovalpageComponent,
    MysettingspageComponent,
    AnalyticsComponent,
    TabspageComponent,
    AllexpensesComponent,
    AnalyticspageComponent,
    BulkaddreportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4_Z1FK1Iy_AIfUVjEhVUVK6gx6wLvFh0",
      authDomain: "imagegallery-9f3d5.firebaseapp.com",
      projectId: "imagegallery-9f3d5",
      storageBucket: "imagegallery-9f3d5.appspot.com",
      messagingSenderId: "311923668193",
      appId: "1:311923668193:web:988cafb52db0eeeb6d73a0"
    }),
    AngularFireStorageModule,
    
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
    SelectDropDownModule,
    MatInputModule,
    MatSearchableSelectModule,
    Ng2SearchPipeModule,
    MatSearchableSelectModule,
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
