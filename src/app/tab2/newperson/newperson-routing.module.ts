import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpersonPage } from './newperson.page';

const routes: Routes = [
  {
    path: '',
    component: NewpersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpersonPageRoutingModule {}
