import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMdpPage } from './update-mdp.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMdpPageRoutingModule {}
