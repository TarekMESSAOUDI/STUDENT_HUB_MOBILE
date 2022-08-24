import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableEtudiantPageRoutingModule } from './table-etudiant-routing.module';

import { TableEtudiantPage } from './table-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableEtudiantPageRoutingModule
  ],
  declarations: [TableEtudiantPage]
})
export class TableEtudiantPageModule {}
