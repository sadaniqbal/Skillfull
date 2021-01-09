import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialsDetailPageRoutingModule } from './credentialsDetail-routing.module';

import { CredentialsDetailPage } from './credentialsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredentialsDetailPageRoutingModule
  ],
  declarations: [CredentialsDetailPage]
})
export class CredentialsDetailPageModule {}
