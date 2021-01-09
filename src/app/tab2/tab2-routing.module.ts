import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'persondetail',
    loadChildren: () => import('../tab2/persondetail/persondetail-routing.module').then( m => m.persondetailPageRoutingModule)
  },
  {
    path: 'newperson',
    loadChildren: () => import('./newperson/newperson.module').then( m => m.NewpersonPageModule)
  },
  {
    path: 'persondetail',
    loadChildren: () => import('./persondetail/persondetail.module').then( m => m.persondetailPageModule)
  },
  {
    path: 'editperson',
    loadChildren: () => import('.//editperson/editperson.module').then( m => m.EditpersonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
