import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  },
  {
    path: 'editcredentials',
    loadChildren: () => import('./editcredentials/editcredentials.module').then( m => m.EditcredentialsPageModule)
  },
  {
    path: 'newcredentials',
    loadChildren: () => import('./newcredentials/newcredentials.module').then( m => m.NewcredentialsPageModule)
  },
  {
    path: 'credentialsdetail',
    loadChildren: () => import('./credentialsdetail/credentialsdetail.module').then( m => m.CredentialsDetailPageModule)
  },
  {
    path: 'credentialsdetail',
    loadChildren: () => import('./credentialsdetail/credentialsDetail-routing.module').then( m => m.CredentialsDetailPageRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}



