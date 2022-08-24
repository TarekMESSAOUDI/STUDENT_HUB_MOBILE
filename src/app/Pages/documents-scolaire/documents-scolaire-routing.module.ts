import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsScolairePage } from './documents-scolaire.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsScolairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsScolairePageRoutingModule {}
