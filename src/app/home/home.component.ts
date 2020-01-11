import {Component, Input, Output, ViewEncapsulation} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {ShoppingCartService} from "../shared/shoppingcart/shoppingcart.service";
import {ProductRepositoryService} from "../productRepository/productrepository.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  public products =[];

  public constructor(protected shoppingCartService: ShoppingCartService,
                     protected productRepositoryService: ProductRepositoryService) {

    this.productRepositoryService.findAll().subscribe((result:Array<any>) =>{
      this.products = result;
    })

  }

  public addProductToCart(product) {
    this.shoppingCartService.addToCart(product, 1);
  }


}


