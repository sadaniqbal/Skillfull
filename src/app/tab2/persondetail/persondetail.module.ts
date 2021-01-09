import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { persondetailPageRoutingModule } from './persondetail-routing.module';

import { persondetailPage } from './persondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    persondetailPageRoutingModule
  ],
  declarations: [persondetailPage]
})
export class persondetailPageModule {}
