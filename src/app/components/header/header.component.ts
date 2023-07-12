import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public open = false;
  public color = false
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    window.scrollY > 250
    ? this.color = true
    : this.color = false
  }

  openMenu() {
    this.open = !this.open;

    this.menuIsOpen.emit(this.open);
  }
}
