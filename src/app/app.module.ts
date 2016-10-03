import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SimpleChartExample} from './charts/highchart.component';
import {ChartComponent} from 'angular2-highcharts';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
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
