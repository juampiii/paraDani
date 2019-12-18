import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ShoppingCartService {

  protected cart = [];

  public updateCartSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public addToCart(product, quantity){

    let exist = false;
    this.cart.forEach(item =>
    {
      if(item.product.name == product.name)
      {
        item.quantity = item.quantity + quantity;
        exist = true;
      }
    })

    if(!exist)
    {
      this.cart.push({
        "product": product,
        "quantity": quantity
      })
    }

    this.updateCartSubject.next(this.count());
  }

  public count(){
    let result = 0;
    this.cart.forEach(item => {
      result += item.quantity;
    })

    return result;
  }
}
