import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public open = false;
  innerWidth = 0;

  @Output() menuIsOpen = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 830) {
      this.open = false;
      this.menuIsOpen.emit(this.open);
    }
  }

  openMenu() {
    this.open = !this.open;

    this.menuIsOpen.emit(this.open);
  }
}
