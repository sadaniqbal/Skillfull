import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpersonPage } from './editperson.page';

const routes: Routes = [
  {
    path: '',
    component: EditpersonPage
  },
  {
    path: ':personId',
    component: EditpersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpersonPageRoutingModule {}
