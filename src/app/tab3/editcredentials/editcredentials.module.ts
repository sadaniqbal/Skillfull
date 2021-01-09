import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcredentialsPageRoutingModule } from './editcredentials-routing.module';

import { EditcredentialsPage } from './editcredentials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcredentialsPageRoutingModule
  ],
  declarations: [EditcredentialsPage]
})
export class EditcredentialsPageModule {}
