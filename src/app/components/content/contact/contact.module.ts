import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from '../../shared/title/title.module';
import { ButtonModule } from '../../shared/button/button.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ButtonModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
