import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './conponents/signin/signin.component';
import { SignupComponent } from './conponents/signup/signup.component';
import { UserComponent } from './conponents/user/user.component';
import { UserdetailsComponent } from './conponents/user/userdetails/userdetails.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {path:'signin', component : SigninComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/userdetails/:id', component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
