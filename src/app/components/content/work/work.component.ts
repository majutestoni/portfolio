import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  constructor(){}
  isFlipped1: boolean = false;
  isFlipped2: boolean = false;
  isFlipped3: boolean = false;

  toggleFlip1() {
    this.isFlipped1 = !this.isFlipped1;
  }
  toggleFlip2() {
    this.isFlipped2 = !this.isFlipped2;
  }
  toggleFlip3() {
    this.isFlipped3 = !this.isFlipped3;
  }

}
