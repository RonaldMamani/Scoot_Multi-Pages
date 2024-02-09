import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-pointed-out',
  templateUrl: './city-pointed-out.component.html',
  styleUrls: ['./city-pointed-out.component.scss']
})
export class CityPointedOutComponent {
  @Input() class : string = ''
  @Input() City : string = ''
  @Input() borderX : string = ''
  @Input() borderWidth : string = ''
}
