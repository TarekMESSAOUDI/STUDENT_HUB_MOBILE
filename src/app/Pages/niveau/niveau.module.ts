import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiveauPageRoutingModule } from './niveau-routing.module';

import { NiveauPage } from './niveau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiveauPageRoutingModule
  ],
  declarations: [NiveauPage]
})
export class NiveauPageModule {}
