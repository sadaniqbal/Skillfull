import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { persondetailPage } from './persondetail.page';

const routes: Routes = [
  {
    path: '',
    component: persondetailPage
  },
  {
    path: ":personId",
    component: persondetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class persondetailPageRoutingModule {}