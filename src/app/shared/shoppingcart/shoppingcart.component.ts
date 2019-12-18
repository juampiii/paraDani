import {Component, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {ReplaySubject, Subscription} from "rxjs";
import {ShoppingCartService} from "./shoppingcart.service";

@Component({
  selector: 'shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class ShoppingCartComponent implements OnDestroy{

  public totalItems:number = 0;
  public subscription: Subscription;

  constructor(protected shoppingCartService: ShoppingCartService) {
   this.subscription = this.shoppingCartService.updateCartSubject.subscribe(cartItemsCount =>{
      this.totalItems = cartItemsCount;
    })
  }

  public showShoppingCartDetails()
  {
    alert("Shopping cart total items: "+this.totalItems);
  }

  ngOnDestroy(): void {
    // Los subscriptores Como función lamda seguirá ejecutandose a pesar de haberla borrado
    this.subscription.unsubscribe();
  }
}


