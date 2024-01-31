import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefie-topic',
  templateUrl: './benefie-topic.component.html',
  styleUrls: ['./benefie-topic.component.scss']
})
export class BenefieTopicComponent {
  @Input() imageUrl : string = ''
  @Input() Benefie : string = ''
  @Input() Descrition : string = ''
}
