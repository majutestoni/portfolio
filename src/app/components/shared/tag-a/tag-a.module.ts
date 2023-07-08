import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagAComponent } from './tag-a.component';



@NgModule({
  declarations: [
    TagAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TagAComponent]
})
export class TagAModule { }
