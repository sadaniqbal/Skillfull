import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcredentialsPage } from './editcredentials.page';

const routes: Routes = [
  {
    path: '',
    component: EditcredentialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcredentialsPageRoutingModule {}
