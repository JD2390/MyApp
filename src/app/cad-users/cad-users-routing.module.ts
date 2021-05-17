import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadUsersPage } from './cad-users.page';

const routes: Routes = [
  {
    path: '',
    component: CadUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadUsersPageRoutingModule {}
