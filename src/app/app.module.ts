import { TabComponent } from './components/expenses/tab/tab.component';
import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
import { NgModule } from '@angular/core';
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
import { TestingComponent } from './testing/testing.component';
import { NgxDropzoneComponent, NgxDropzoneModule } from 'ngx-dropzone';


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
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
