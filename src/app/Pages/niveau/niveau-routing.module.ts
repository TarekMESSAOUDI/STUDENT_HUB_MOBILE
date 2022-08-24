import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiveauPage } from './niveau.page';

const routes: Routes = [
  {
    path: '',
    component: NiveauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiveauPageRoutingModule {}
