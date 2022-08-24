import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeCoverImagePage } from './change-cover-image.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeCoverImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeCoverImagePageRoutingModule {}
