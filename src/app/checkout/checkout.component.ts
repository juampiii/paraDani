import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  {

  constructor() { }

  onSubmit(f) {
    console.log(f);
  }

  public name;
  public lastname;
  public address;
  public address2;
  public city;
  public postalcode;
public gridCheck;



}
