import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { TitleModule } from '../../shared/title/title.module';
import { TagAModule } from '../../shared/tag-a/tag-a.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, TitleModule, TagAModule],
  exports: [WorkComponent],
})
export class WorkModule {}
