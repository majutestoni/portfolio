import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { TitleModule } from '../../shared/title/title.module';
import { TagAModule } from '../../shared/tag-a/tag-a.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, TitleModule, TagAModule, TranslateModule],
  exports: [WorkComponent],
})
export class WorkModule {}
