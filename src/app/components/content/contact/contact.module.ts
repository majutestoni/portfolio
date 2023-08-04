import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from '../../shared/title/title.module';
import { ButtonModule } from '../../shared/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagAModule } from '../../shared/tag-a/tag-a.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TagAModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
