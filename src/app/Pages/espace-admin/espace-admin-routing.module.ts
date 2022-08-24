import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceAdminPage } from './espace-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceAdminPageRoutingModule {}
