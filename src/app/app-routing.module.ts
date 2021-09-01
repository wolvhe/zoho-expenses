import { TabComponent } from './components/tab/tab.component';
import { FromCardsComponent } from './components/from-cards/from-cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddExpenseComponent } from './components/addExpense/addExpense.component';
import { BulkAddExpenseComponent } from './components/bulk-add-expense/bulk-add-expense.component';
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

