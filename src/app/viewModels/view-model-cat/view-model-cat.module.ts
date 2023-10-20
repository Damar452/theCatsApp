import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewModelCatPageRoutingModule } from './view-model-cat-routing.module';
import { ViewModelCatPage } from './view-model-cat.page';
import { ViewsModule } from 'src/app/views/views.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewModelCatPageRoutingModule,
    ViewsModule
  ],
  declarations: [ViewModelCatPage]
})
export class ViewModelCatPageModule {}
