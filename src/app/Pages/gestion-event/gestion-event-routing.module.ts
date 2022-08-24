import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEventPage } from './gestion-event.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEventPageRoutingModule {}
