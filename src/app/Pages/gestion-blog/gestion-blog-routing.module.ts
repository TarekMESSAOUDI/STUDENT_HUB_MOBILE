import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionBlogPage } from './gestion-blog.page';

const routes: Routes = [
  {
    path: '',
    component: GestionBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionBlogPageRoutingModule {}
