import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent {
  readMeWorks1 : boolean = false
  readMeWorks2 : boolean = false
  readMeWorks3 : boolean = false

  readMeDriving1 : boolean = false
  readMeDriving2 : boolean = false
  readMeDriving3 : boolean = false
}
