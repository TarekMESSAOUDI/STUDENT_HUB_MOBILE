import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeDocumentPageRoutingModule } from './demande-document-routing.module';

import { DemandeDocumentPage } from './demande-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeDocumentPageRoutingModule
  ],
  declarations: [DemandeDocumentPage]
})
export class DemandeDocumentPageModule {}
