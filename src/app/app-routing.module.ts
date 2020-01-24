import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthComponent} from './pages/auth/auth.component';
import {StudentportfolioComponent} from './pages/studentportfolio/studentportfolio.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'studentportfolio', component: StudentportfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
