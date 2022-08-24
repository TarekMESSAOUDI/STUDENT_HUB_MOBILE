import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerShipPageRoutingModule } from './partner-ship-routing.module';

import { PartnerShipPage } from './partner-ship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerShipPageRoutingModule
  ],
  declarations: [PartnerShipPage]
})
export class PartnerShipPageModule {}
