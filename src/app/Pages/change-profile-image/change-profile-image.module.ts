import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeProfileImagePageRoutingModule } from './change-profile-image-routing.module';

import { ChangeProfileImagePage } from './change-profile-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeProfileImagePageRoutingModule
  ],
  declarations: [ChangeProfileImagePage]
})
export class ChangeProfileImagePageModule {}
