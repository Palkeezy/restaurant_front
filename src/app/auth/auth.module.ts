import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModuleModule} from '../material-module.module';

const routes: Routes = [
  {path: '', redirectTo: '/auth/register', pathMatch: 'full'},
  {
    path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
];


@NgModule({

  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ],
  exports: [
    AuthComponent,
    RouterModule
  ]
})
export class AuthModule {
}
