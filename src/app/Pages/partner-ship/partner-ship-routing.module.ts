import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerShipPage } from './partner-ship.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerShipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerShipPageRoutingModule {}
