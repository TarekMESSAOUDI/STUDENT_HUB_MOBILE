import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEventPageRoutingModule } from './gestion-event-routing.module';

import { GestionEventPage } from './gestion-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEventPageRoutingModule
  ],
  declarations: [GestionEventPage]
})
export class GestionEventPageModule {}
