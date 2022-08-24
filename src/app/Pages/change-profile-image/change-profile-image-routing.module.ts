import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeProfileImagePage } from './change-profile-image.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeProfileImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeProfileImagePageRoutingModule {}
