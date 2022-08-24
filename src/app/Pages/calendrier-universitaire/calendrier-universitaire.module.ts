import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierUniversitairePageRoutingModule } from './calendrier-universitaire-routing.module';

import { CalendrierUniversitairePage } from './calendrier-universitaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierUniversitairePageRoutingModule
  ],
  declarations: [CalendrierUniversitairePage]
})
export class CalendrierUniversitairePageModule {}
