import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ViewCatsComponent } from './view-cats/view-cats.component';



@NgModule({
  declarations: [ViewCatsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ViewCatsComponent
  ]
})
export class ViewsModule { }
