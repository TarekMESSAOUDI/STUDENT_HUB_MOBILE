import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilierePageRoutingModule } from './filiere-routing.module';

import { FilierePage } from './filiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilierePageRoutingModule
  ],
  declarations: [FilierePage]
})
export class FilierePageModule {}
