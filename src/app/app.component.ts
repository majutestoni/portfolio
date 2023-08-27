import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public element = '';

  ngOnInit(): void {
    Aos.init();
  }
  title = 'portfolio';

  public open = false;

  menuIsOpen(event: any) {
    this.open = event;
  }

  public gotToSection($element: any, section: string): void {
    this.element = section;

    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  changeTheme($event: any) {
    document.body.classList.toggle('dark-theme');
  }
}
