import { ApprovalPageComponent } from './components/approval-page/approval-page.component';
import { TestingComponent } from './testing/testing.component';
import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { AddExpenseComponent } from './components/expenses/addExpense/addExpense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
import { TabComponent } from './components/expenses/tab/tab.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MysettingsComponent } from './components/mysettings/mysettings.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TripsComponent } from './components/trips/trips.component';
import { HomeComponent } from './home/home.component';
import { TripsFormComponent } from './components/trips/trips-form/trips-form.component';
import { AllreportsComponent } from './components/reports/allreports/allreports.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CardsComponent } from './components/cards/cards.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AlladvanceComponent } from './components/advance/alladvance/alladvance.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'trips', component: TripsComponent},
  {path: 'trips/new', component: TripsFormComponent},
  {path: 'mysettings', component: MysettingsComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'bulkaddexpense', component:BulkAddExpenseComponent},
  {path: 'fromcards', component: FromCardsComponent},
  {path: 'tab', component: TabComponent},
  {path: 'advances', component: AdvanceComponent},
  {path: 'advances/all', component: AlladvanceComponent},
  {path: 'reports/all', component: AllreportsComponent},
  {path: 'approval', component: ApprovalPageComponent},
  {path: 'test', component: TestingComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'cards',component:CardsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

