import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './conponents/products/addproduct/addproduct.component';
import { ProductsComponent } from './conponents/products/products.component';
import { UpdateproductComponent } from './conponents/products/updateproduct/updateproduct.component';
import { BookingComponent } from './conponents/service/booking/booking.component';
import { ServiceComponent } from './conponents/service/service.component';
import { SigninComponent } from './conponents/signin/signin.component';
import { SignupComponent } from './conponents/signup/signup.component';
import { UserComponent } from './conponents/user/user.component';
import { UserdetailsComponent } from './conponents/user/userdetails/userdetails.component';
import { UserupdateComponent } from './conponents/user/userupdate/userupdate.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {path:'signin', component : SigninComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/userdetails/:id', component: UserdetailsComponent},
  {path: 'users/userupdate/:id', component: UserupdateComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'services/bookings', component: BookingComponent},

  {path: 'products', component: ProductsComponent},
  {path: 'products/adproduct', component: AddproductComponent},
  {path: 'products/updateproduct/:id', component: UpdateproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
