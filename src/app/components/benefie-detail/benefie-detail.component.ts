import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefie-detail',
  templateUrl: './benefie-detail.component.html',
  styleUrls: ['./benefie-detail.component.scss']
})
export class BenefieDetailComponent {
  @Input() imageUrl : string = ''
  @Input() DescritionImage : string = ''
  @Input() ThereButton : true | false = false
  @Input() ContentButton : string = ''
  @Input() TitleBenefie : string = ''
  @Input() Descrition : string = ''
}
