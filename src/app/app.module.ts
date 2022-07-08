import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './conponents/signin/signin.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { SignupComponent } from './conponents/signup/signup.component';
import { UserComponent } from './conponents/user/user.component';
import { UserlistComponent } from './conponents/user/userlist/userlist.component';
import { UserdetailsComponent } from './conponents/user/userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent,
    UserComponent,
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
