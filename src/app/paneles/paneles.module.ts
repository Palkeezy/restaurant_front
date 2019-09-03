import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelesComponent} from './paneles.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModuleModule} from '../material-module.module';


const routes: Routes = [
  {path: '', component: PanelesComponent, children: [
      {path: 'manager', loadChildren: './manager/manager.module#ManagerModule'},
      {path: 'client', loadChildren: './client/client.module#ClientModule'},
    ]
  },
];


@NgModule({
  declarations: [
    PanelesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ],
  exports: [
    PanelesComponent,
    RouterModule
  ]
})
export class PanelesModule {
}
