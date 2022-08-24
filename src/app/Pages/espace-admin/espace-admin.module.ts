import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceAdminPageRoutingModule } from './espace-admin-routing.module';

import { EspaceAdminPage } from './espace-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceAdminPageRoutingModule
  ],
  declarations: [EspaceAdminPage]
})
export class EspaceAdminPageModule {}
