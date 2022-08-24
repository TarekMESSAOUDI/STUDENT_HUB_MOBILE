import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowItWorkPageRoutingModule } from './how-it-work-routing.module';

import { HowItWorkPage } from './how-it-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowItWorkPageRoutingModule
  ],
  declarations: [HowItWorkPage]
})
export class HowItWorkPageModule {}
