import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableEtudiantPage } from './table-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: TableEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableEtudiantPageRoutingModule {}
