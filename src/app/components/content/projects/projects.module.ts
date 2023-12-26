import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectModule } from '../../shared/project/project.module';
import { TitleModule } from '../../shared/title/title.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/button/button.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ProjectModule, TitleModule, FormsModule, ReactiveFormsModule, ButtonModule, TranslateModule],
    exports: [ProjectsComponent]
})
export class ProjectsModule {}
