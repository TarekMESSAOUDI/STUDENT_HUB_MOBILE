import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialitePage } from './specialite.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialitePageRoutingModule {}
