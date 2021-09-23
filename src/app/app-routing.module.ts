import { ExpattendeeComponent } from './analytics/analytics_expense/expattendee/expattendee.component';
import { AdvancepageComponent } from './home/advancepage/advancepage.component';
import { ApprovalPageComponent } from './components/approval-page/approval-page.component';
import { TestingComponent } from './testing/testing.component';
import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { AddExpenseComponent } from './components/expenses/addExpense/addExpense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
import { TabComponent } from './components/expenses/tab/tab.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MysettingsComponent } from './components/mysettings/mysettings.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TripsComponent } from './components/trips/trips.component';
import { HomeComponent } from './home/home.component';
import { TripsFormComponent } from './components/trips/trips-form/trips-form.component';
// import { AllreportsComponent } from './components/allreports/allreports.component';
import { AlltripsComponent } from './components/trips/alltrips/alltrips.component';
import { ImportcsvComponent } from './components/importcsv/importcsv.component';
import { AllreportsComponent } from './components/reports/allreports/allreports.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

import { CardsComponent } from './components/cards/cards.component'
import { AdvanceComponent } from './components/advance/advance.component';
import { AlladvanceComponent } from './components/advance/alladvance/alladvance.component';
import { AnalyticspageComponent } from './home/analyticspage/analyticspage.component';
import { ReportspageComponent } from './home/reportspage/reportspage.component';
import { ExpensespageComponent } from './home/expensespage/expensespage.component';
import { TripspageComponent } from './home/tripspage/tripspage.component';
import { CardspageComponent } from './home/cardspage/cardspage.component';
import { ApprovalpageComponent } from './home/approvalpage/approvalpage.component';
import { MysettingspageComponent } from './home/mysettingspage/mysettingspage.component';
import { ImportReportsComponent } from './components/reports/import-reports/import-reports.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TabspageComponent } from './home/approvalpage/tabspage/tabspage.component';
import { AllexpensesComponent } from './components/expenses/allexpenses/allexpenses.component';
import { BulkaddreportsComponent } from './home/reportspage/bulkaddreports/bulkaddreports.component';
import { ExpcategoryComponent } from './analytics/analytics_expense/expcategory/expcategory.component';
import { ExpcurrencyComponent } from './analytics/analytics_expense/expcurrency/expcurrency.component';
import { ExpcustomerComponent } from './analytics/analytics_expense/expcustomer/expcustomer.component';
import { ExpdetailsComponent } from './analytics/analytics_expense/expdetails/expdetails.component';
import { ExpmerchantComponent } from './analytics/analytics_expense/expmerchant/expmerchant.component';
import { ExpprojectComponent } from './analytics/analytics_expense/expproject/expproject.component';
const routes: Routes = [
  // {path: '', component: HomepageComponent},
  {path: '', redirectTo:'login', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reports', component: ReportspageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'trips', component: TripspageComponent},
  {path: 'trips/new', component: TripsFormComponent},
  {path: 'trips/all', component:AlltripsComponent},
  // {path: 'mysettings', component: MysettingsComponent},
  {path: 'mysettings', component: MysettingspageComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'bulkaddexpense', component:BulkAddExpenseComponent},
  {path: 'fromcards', component: FromCardsComponent},
  {path: 'tab', component: TabspageComponent},
  {path: 'allreports', component: AllreportsComponent},
  {path: 'advances', component: AdvancepageComponent},
  {path: 'import', component: ImportcsvComponent},
  {path: 'advances', component: AdvanceComponent},
  {path: 'advances/all', component: AlladvanceComponent},
  {path: 'reports/all', component: AllreportsComponent},
  {path: 'approval', component: ApprovalpageComponent},
  {path: 'reports/import', component: BulkaddreportsComponent},
  {path: 'trips/all',component:AlltripsComponent},
  {path: 'test', component: TestingComponent},
  {path: 'expenses', component: ExpensespageComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'cards',component:CardspageComponent},
  {path: 'analytics',component:  AnalyticspageComponent},
  {path: 'tab/all', component: AllexpensesComponent},
  {path: 'reports/expense/attendee', component: ExpattendeeComponent},
  {path: 'reports/expense/category', component: ExpcategoryComponent},
  {path: 'reports/expense/currency', component: ExpcurrencyComponent},
  {path: 'reports/expense/customer', component: ExpcustomerComponent},
  {path: 'reports/expense/details', component: ExpdetailsComponent},
  {path: 'reports/expense/merchant', component: ExpmerchantComponent},
  {path: 'reports/expense/project', component: ExpprojectComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }