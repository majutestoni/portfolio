import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Aos from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public element = '';


    constructor(private translateService: TranslateService) {

    }

    ngOnInit(): void {
        Aos.init();
        //    this.setLanguage();

    }
    title = 'portfolio';

    public open = false;

    changeLanguage($event: string) {
      this.translateService.use($event)
    }

    menuIsOpen(event: any) {
        this.open = event;
    }

    processSection($event: string) {
        const teste: HTMLElement | null = document.getElementById($event);
        this.gotToSection(teste, $event);
    }

    public gotToSection($element: any, section: string): void {
        this.element = section;

        $element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    changeTheme($event: any) {
        document.body.classList.toggle('dark-theme');
    }
}
