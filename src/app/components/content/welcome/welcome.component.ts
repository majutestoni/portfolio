import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Output() clickMore = new EventEmitter();

  ngOnInit(): void {}

  public emitEvent(): void {
    this.clickMore.emit('');
  }
}
