
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsDetailPage } from './credentialsdetail.page'
const routes: Routes = [
  {
    path: '',
    component: CredentialsDetailPage
  },
  {
    path: ":credentialsId",
    component: CredentialsDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialsDetailPageRoutingModule {}
