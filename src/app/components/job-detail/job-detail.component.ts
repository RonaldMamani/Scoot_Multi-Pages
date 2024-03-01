import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent {
  @Input() NameJob : string = ''
  @Input() NameLocalWorld : string = ''
  @Input() ContentButton : string = ''
}
