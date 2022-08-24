import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeCoverImagePageRoutingModule } from './change-cover-image-routing.module';

import { ChangeCoverImagePage } from './change-cover-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeCoverImagePageRoutingModule
  ],
  declarations: [ChangeCoverImagePage]
})
export class ChangeCoverImagePageModule {}
