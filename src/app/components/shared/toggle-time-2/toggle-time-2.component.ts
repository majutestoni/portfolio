import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-time-2',
  templateUrl: './toggle-time-2.component.html',
  styleUrls: ['./toggle-time-2.component.scss'],
})
export class ToggleTimeComponent2 {
  @Output() changeTheme = new EventEmitter();

  darkTheme() {
    this.changeTheme.emit('dark');
  }
}
