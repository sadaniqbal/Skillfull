import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpersonPageRoutingModule } from './newperson-routing.module';

import { NewpersonPage } from './newperson.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewpersonPageRoutingModule
  ],
  declarations: [NewpersonPage]
})
export class NewpersonPageModule {}
