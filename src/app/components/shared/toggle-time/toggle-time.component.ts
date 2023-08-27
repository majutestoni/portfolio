import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-time',
  templateUrl: './toggle-time.component.html',
  styleUrls: ['./toggle-time.component.scss'],
})
export class ToggleTimeComponent {
  @Output() changeTheme = new EventEmitter();

  darkTheme() {
    this.changeTheme.emit('dark');
  }
}
