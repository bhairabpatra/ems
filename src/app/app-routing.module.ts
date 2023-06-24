import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreateempComponent } from './createemp/createemp.component';
import { ActionComponent } from './action/action.component';

const routes: Routes = [

  {path:'home' , component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'editprofile:/:id',component:EditprofileComponent},
  {path:'createemp', component: CreateempComponent},
  {path:'action', component: ActionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
