import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideLeftComponent } from './side-left.component';



@NgModule({
  declarations: [
    SideLeftComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SideLeftComponent]
})
export class SideLeftModule { }
