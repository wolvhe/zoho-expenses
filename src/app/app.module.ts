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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
