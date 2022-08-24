import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionBlogPageRoutingModule } from './gestion-blog-routing.module';

import { GestionBlogPage } from './gestion-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionBlogPageRoutingModule
  ],
  declarations: [GestionBlogPage]
})
export class GestionBlogPageModule {}
