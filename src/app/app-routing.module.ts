import { BulkAddExpenseComponent } from './components/expenses/bulk-add-expense/bulk-add-expense.component';
import { AddExpenseComponent } from './components/expenses/addExpense/addExpense.component';
import { FromCardsComponent } from './components/expenses/from-cards/from-cards.component';
import { TabComponent } from './components/expenses/tab/tab.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'bulkaddexpense', component:BulkAddExpenseComponent},
  {path: 'fromcards', component: FromCardsComponent},
  {path: 'tab', component: TabComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

