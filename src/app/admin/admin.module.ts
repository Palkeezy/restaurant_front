import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from '../restaurants/logout/logout.component';


const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {
    path: '', component: AdminComponent, children: [
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AdminComponent,
    RouterModule
  ]
})
export class AdminModule { }
