import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableClubPage } from './table-club.page';

const routes: Routes = [
  {
    path: '',
    component: TableClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableClubPageRoutingModule {}
