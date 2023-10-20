import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewModelCatPage } from './view-model-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewModelCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewModelCatPageRoutingModule {}
