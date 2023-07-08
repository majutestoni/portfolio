import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public open = false

  @Output() menuIsOpen = new EventEmitter();

  openMenu(){
    this.open = !this.open

    this.menuIsOpen.emit(this.open)
  }
}
