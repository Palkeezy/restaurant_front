import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {UserComponent} from './user/user.component';
import {CartComponent} from './cart/cart.component';
import {RestaurantsComponent} from './restaurants.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TestGuard} from '../guards/test.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'paneles', pathMatch: 'full'},
  {
    path: '', component: RestaurantsComponent, children: [
      {path: 'restaurant', component: RestaurantComponent},
      {path: 'cart', component: CartComponent},
      {path: 'user', component: UserComponent}
    ]
  },
];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantsComponent,
    UserComponent,
    CartComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RestaurantsComponent,
    RouterModule
  ]
})
export class RestaurantsModule {
}
