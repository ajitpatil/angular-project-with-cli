import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserProfileComponent} from './users/user-profile.component';
import {SimpleChartExample} from './charts/highchart.component';
import {ChartComponent} from 'angular2-highcharts';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SimpleChartExample,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
