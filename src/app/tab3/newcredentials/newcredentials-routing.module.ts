import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcredentialsPage } from './newcredentials.page';

const routes: Routes = [
  {
    path: '',
    component: NewcredentialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcredentialsPageRoutingModule {}
