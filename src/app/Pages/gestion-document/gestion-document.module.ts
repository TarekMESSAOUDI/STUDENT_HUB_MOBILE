import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionDocumentPageRoutingModule } from './gestion-document-routing.module';

import { GestionDocumentPage } from './gestion-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionDocumentPageRoutingModule
  ],
  declarations: [GestionDocumentPage]
})
export class GestionDocumentPageModule {}
