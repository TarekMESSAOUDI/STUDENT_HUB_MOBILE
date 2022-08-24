import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialitePageRoutingModule } from './specialite-routing.module';

import { SpecialitePage } from './specialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialitePageRoutingModule
  ],
  declarations: [SpecialitePage]
})
export class SpecialitePageModule {}
