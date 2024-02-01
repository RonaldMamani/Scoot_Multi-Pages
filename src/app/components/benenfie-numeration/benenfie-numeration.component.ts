import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benenfie-numeration',
  templateUrl: './benenfie-numeration.component.html',
  styleUrls: ['./benenfie-numeration.component.scss']
})
export class BenenfieNumerationComponent {
  @Input() imageUrl : string = ''
  @Input() DescritionImage : string = ''
  @Input() Number : string = ''
  @Input() Title : string = ''
  @Input() Descrition : string = ''
}
