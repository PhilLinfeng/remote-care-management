import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkboardComponent } from './components/dashboard/workboard/workboard.component';
import { PatientsComponent } from './components/dashboard/patients/patients.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';

import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkboardComponent,
    PatientsComponent,
    MessagesComponent,
    ReportsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
