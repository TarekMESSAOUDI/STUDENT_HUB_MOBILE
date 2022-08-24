import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableClubPageRoutingModule } from './table-club-routing.module';

import { TableClubPage } from './table-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableClubPageRoutingModule
  ],
  declarations: [TableClubPage]
})
export class TableClubPageModule {}
