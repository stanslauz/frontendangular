import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { CheckLoanComponent } from './check-loan/check-loan.component';
import { PayLoanComponent } from './pay-loan/pay-loan.component';
import { BalanceComponent } from './balance/balance.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'loan', component: ApplyLoanComponent},
  {path: 'limit', component:CheckLoanComponent},
  {path: 'pay', component:PayLoanComponent},
  {path: 'bal', component:BalanceComponent},
  {path: 'rep', component:ReportsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
