import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { TitleModule } from '../../shared/title/title.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, TitleModule],
  exports: [WorkComponent],
})
export class WorkModule {}
