import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-image',
  templateUrl: './page-image.component.html',
  styleUrls: ['./page-image.component.scss']
})
export class PageImageComponent {
  @Input() ImageUrl : string = ''
  @Input() NamePage : string = ''
}
