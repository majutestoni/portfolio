import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SideLeftModule } from './components/side-left/side-left.module';
import { FooterModule } from './components/footer/footer.module';
import { WelcomeModule } from './components/content/welcome/welcome.module';
import { AboutModule } from './components/content/about/about.module';
import { ContactModule } from './components/content/contact/contact.module';
import { ProjectsModule } from './components/content/projects/projects.module';
import { WorkModule } from './components/content/work/work.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        SideLeftModule,
        FooterModule,
        WelcomeModule,
        AboutModule,
        ContactModule,
        ProjectsModule,
        WorkModule,
        TranslateModule.forRoot({
            defaultLanguage: 'pt',
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
