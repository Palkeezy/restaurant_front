import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {MenuComponent} from './menu/menu.component';
import {DishesComponent} from './dishes/dishes.component';
import {StatComponent} from './stat/stat.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {MaterialModuleModule} from '../../material-module.module';

const routes: Routes = [
  {path: '', component: ClientComponent, children: [
      {path: 'cart', component: CartComponent},
      {path: 'restaurant', component: RestaurantComponent},
      {path: 'dishes', component: DishesComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'stat', component: StatComponent},
    ]
  },
];


@NgModule({
  declarations: [
    ClientComponent,
    CartComponent,
    RestaurantComponent,
    MenuComponent,
    DishesComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ],
  exports: [
    ClientComponent,
    RouterModule
  ]
})
export class ClientModule {
}
