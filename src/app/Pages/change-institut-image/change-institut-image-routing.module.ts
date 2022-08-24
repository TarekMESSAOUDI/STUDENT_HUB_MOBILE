import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeInstitutImagePage } from './change-institut-image.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeInstitutImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeInstitutImagePageRoutingModule {}
