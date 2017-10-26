import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkboardComponent } from './components/dashboard/workboard/workboard.component';
import { PatientsComponent }  from './components/dashboard/patients/patients.component';
import { MessagesComponent }  from './components/dashboard/messages/messages.component';
import { ReportsComponent }   from './components/dashboard/reports/reports.component';
import { SidebarComponent }   from './components/dashboard/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
