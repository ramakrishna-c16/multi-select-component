import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, OwlDateTimeIntl } from 'ng-pick-datetime';
import { MyDateRangePickerModule } from 'mydaterangepicker';


import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

export const MY_NATIVE_FORMATS = {
  datePickerInput: { day: 'numeric',month: 'short' }
};
export const DefaultIntl = {
  cancelBtnLabel: 'Close',
  setBtnLabel: 'Apply',
  rangeFromLabel: 'From',
  rangeToLabel: 'To',
};

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    MyDateRangePickerModule
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],
  providers:[
    // {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS},
    // {provide: OwlDateTimeIntl, useValue: DefaultIntl}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
