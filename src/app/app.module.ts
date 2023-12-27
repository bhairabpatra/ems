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

import { EmployeelistService } from './employeelist.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EditprofileComponent,
    CreateempComponent,
    ActionComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [EmployeelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
