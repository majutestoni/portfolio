import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-a',
  templateUrl: './tag-a.component.html',
  styleUrls: ['./tag-a.component.scss']
})
export class TagAComponent {

  @Input() public link = ''
  @Input() public text = ''

}
