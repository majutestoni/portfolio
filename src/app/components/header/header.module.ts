import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../shared/button/button.module';
import { TagAModule } from '../shared/tag-a/tag-a.module';
import { ToggleTimeModule } from '../shared/toggle-time/toggle-time.module';
import { TranslateModule } from '@ngx-translate/core';
import { ToggleTime2Module } from '../shared/toggle-time-2/toggle-time-2.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonModule, TagAModule, ToggleTimeModule, TranslateModule, ToggleTime2Module],
  exports: [HeaderComponent],
})
export class HeaderModule {}
