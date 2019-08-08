import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/auth/register', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
