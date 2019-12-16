import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class WelcomeComponent {
  customerName:string;
  customerNameAfterRefreshing:string;

  @Input()
  number:number = null;

  public RefreshCustomerName(customerName) {
    this.customerNameAfterRefreshing = customerName;
  }

  public EsPar()
  {
    return this.number %2 == 0;
  }
}


