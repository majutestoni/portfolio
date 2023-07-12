import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void {
  }
  @Output() clickMore = new EventEmitter();

  public emitEvent(): void {
    this.clickMore.emit('');
  }

}
