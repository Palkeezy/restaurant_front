import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/auth/register', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'paneles', loadChildren: './paneles/paneles.module#PanelesModule'},
  {path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
