import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-local-world',
  templateUrl: './local-world.component.html',
  styleUrls: ['./local-world.component.scss']
})
export class LocalWorldComponent {
  @Input() NameLocal : string = ''
}
