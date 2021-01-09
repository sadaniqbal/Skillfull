import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpersonPageRoutingModule } from './editperson-routing.module';

import { EditpersonPage } from './editperson.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditpersonPageRoutingModule
  ],
  declarations: [EditpersonPage]
})
export class EditpersonPageModule {}
