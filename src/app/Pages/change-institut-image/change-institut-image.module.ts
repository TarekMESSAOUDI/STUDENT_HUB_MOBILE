import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeInstitutImagePageRoutingModule } from './change-institut-image-routing.module';

import { ChangeInstitutImagePage } from './change-institut-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeInstitutImagePageRoutingModule
  ],
  declarations: [ChangeInstitutImagePage]
})
export class ChangeInstitutImagePageModule {}
