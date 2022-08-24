import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableEnseignantPage } from './table-enseignant.page';

const routes: Routes = [
  {
    path: '',
    component: TableEnseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableEnseignantPageRoutingModule {}
