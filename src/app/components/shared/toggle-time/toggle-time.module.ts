import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleTimeComponent } from './toggle-time.component';



@NgModule({
  declarations: [
    ToggleTimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToggleTimeComponent]
})
export class ToggleTimeModule { }
