import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableEnseignantPageRoutingModule } from './table-enseignant-routing.module';

import { TableEnseignantPage } from './table-enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableEnseignantPageRoutingModule
  ],
  declarations: [TableEnseignantPage]
})
export class TableEnseignantPageModule {}
