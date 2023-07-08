import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from '../../shared/title/title.module';
import { TagAModule } from '../../shared/tag-a/tag-a.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    TagAModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
