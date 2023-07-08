import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Output() clickMore = new EventEmitter();

  public emitEvent(): void {
    this.clickMore.emit('');
  }

}
