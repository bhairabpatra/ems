import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreateempComponent } from './createemp/createemp.component';
import { ActionComponent } from './action/action.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { AuthGuardService } from 'src/service/auth-guard.service';

const routes: Routes = [

  {path:'home' , component: HomeComponent },
  {path:'login' , component: LoginComponent },
  {path:'signup' , component: SignupComponent },

  {path:'users',component:UsersComponent, canActivate: [AuthGuardService]},
  {path:'users:/:id',component:UserdetailsComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],

  children: [
    { path: 'action', component: ActionComponent },
    { path: 'about', component: AboutComponent },
    // Additional child routes can be added here
    { path: '', redirectTo: 'home', pathMatch: 'full' } // Default child route
  ]
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
