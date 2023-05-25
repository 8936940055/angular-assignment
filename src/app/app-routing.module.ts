import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    redirectTo : 'signin'
  },
  {
    path: 'signin',
    component : SigninComponent,
  },
  {
    path: 'signup',
    component : SignupComponent,
  },
  {
    path: 'dashboard',
    component : DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
