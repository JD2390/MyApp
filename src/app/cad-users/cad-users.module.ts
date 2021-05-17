import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadUsersPageRoutingModule } from './cad-users-routing.module';
import { CadUsersPage } from './cad-users.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CadUsersPageRoutingModule
  ],
  declarations: [CadUsersPage]
})
export class CadUsersPageModule {}
