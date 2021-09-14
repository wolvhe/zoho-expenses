import { TabComponent } from './components/expenses/tab/tab.component';
import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
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
import { BasicinfoComponent } from './components/mysettings/basicinfo/basicinfo.component';
import { PreferencesComponent } from './components/mysettings/preferences/preferences.component';
import { TravelDocsComponent } from './components/mysettings/travel-docs/travel-docs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddExpenseComponent } from './components/expenses/addExpense/addExpense.component';
import { AllreportsComponent } from './components/reports/allreports/allreports.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AlladvanceComponent } from './components/advance/alladvance/alladvance.component';
import { TestingComponent } from './testing/testing.component';
import { NgxDropzoneComponent, NgxDropzoneModule } from 'ngx-dropzone';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ApprovalPageComponent } from './components/approval-page/approval-page.component';
import { ApprovalTripsComponent } from './components/approval-page/approval-trips/approval-trips.component';
import { ApprovalReportComponent } from './components/approval-page/approval-report/approval-report.component';
import { PendingApprovalPageComponent } from './components/approval-page/pending-approval-page/pending-approval-page.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage'

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
    BasicinfoComponent,
    PreferencesComponent,
    TravelDocsComponent,
    AddExpenseComponent,
    BulkAddExpenseComponent,
    FromCardsComponent,
    TabComponent,
    AllreportsComponent,
    AdvanceComponent,
    AlladvanceComponent,
    TestingComponent,
    HomepageComponent,
    ApprovalPageComponent,
    ApprovalReportComponent,
    ApprovalTripsComponent,
    PendingApprovalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4_Z1FK1Iy_AIfUVjEhVUVK6gx6wLvFh0",
      authDomain: "imagegallery-9f3d5.firebaseapp.com",
      projectId: "imagegallery-9f3d5",
      storageBucket: "imagegallery-9f3d5.appspot.com",
      messagingSenderId: "311923668193",
      appId: "1:311923668193:web:988cafb52db0eeeb6d73a0"
    }),
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
