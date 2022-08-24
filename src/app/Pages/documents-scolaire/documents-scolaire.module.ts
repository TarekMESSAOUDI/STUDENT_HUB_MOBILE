import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsScolairePageRoutingModule } from './documents-scolaire-routing.module';

import { DocumentsScolairePage } from './documents-scolaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsScolairePageRoutingModule
  ],
  declarations: [DocumentsScolairePage]
})
export class DocumentsScolairePageModule {}
