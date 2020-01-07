import {Injectable} from "@angular/core";

@Injectable()
export class CustomerService
{
  private customer = {};

  public getCustomer()
  {
    return this.customer;
  }
  public setCustomer(customer)
  {
    this.customer = customer;
    console.log(customer)
  }
}
