import { Component } from '@angular/core';
import {CustomerService} from "../shared/customer/customer.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  {

  constructor(protected customerService:CustomerService) { }

  onSubmit(f) {

      this.customerService.setCustomer(f.form.value)
  }

  public name;
  public lastname;
  public address;
  public email;
  public city;
  public postalcode;
public gridCheck;



}
