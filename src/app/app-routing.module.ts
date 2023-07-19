import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
// import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path : '', component: RegisterComponent},
  {path : 'signup', component: RegisterComponent },
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component:EditComponent}
  // {path: 'user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
