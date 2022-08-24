import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeDocumentPage } from './demande-document.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeDocumentPageRoutingModule {}
