import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './interceptor/network.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:NetworkInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
