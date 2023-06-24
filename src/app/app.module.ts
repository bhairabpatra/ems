import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreateempComponent } from './createemp/createemp.component';
import { ActionComponent } from './action/action.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistService } from './employeelist.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EditprofileComponent,
    CreateempComponent,
    ActionComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
