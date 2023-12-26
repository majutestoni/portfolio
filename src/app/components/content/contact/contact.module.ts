import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from '../../shared/title/title.module';
import { ButtonModule } from '../../shared/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagAModule } from '../../shared/tag-a/tag-a.module';
import { ContactService } from './contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';



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
    TagAModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
