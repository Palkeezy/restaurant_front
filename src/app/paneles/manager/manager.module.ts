import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ManagerComponent} from './manager.component';
import {AddDishesComponent} from './add-dishes/add-dishes.component';
import {AddMenuComponent} from './add-menu/add-menu.component';
import {AddRestaurantComponent} from './add-restaurant/add-restaurant.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: '', component: ManagerComponent, children: [
      {path: 'restaurants', component: AddRestaurantComponent},
      {path: 'menu', component: AddMenuComponent},
      {path: 'dishes', component: AddDishesComponent},
      {path: 'orders', component: OrdersComponent},
    ]
  },
];

@NgModule({
  declarations: [
    ManagerComponent,
    AddDishesComponent,
    AddMenuComponent,
    AddRestaurantComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ManagerComponent,
    RouterModule
  ]
})
export class ManagerModule { }
