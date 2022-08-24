import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendrierUniversitairePage } from './calendrier-universitaire.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierUniversitairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendrierUniversitairePageRoutingModule {}
