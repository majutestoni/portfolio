import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
