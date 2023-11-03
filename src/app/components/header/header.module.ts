import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../shared/button/button.module';
import { TagAModule } from '../shared/tag-a/tag-a.module';
import { ToggleTimeModule } from '../shared/toggle-time/toggle-time.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonModule, TagAModule, ToggleTimeModule, TranslateModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
