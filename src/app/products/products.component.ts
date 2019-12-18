import {Component, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {ReplaySubject, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductRepositoryService} from "../productRepository/productrepository.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class ProductsComponent implements OnDestroy{
  public product = {};

  protected subscriptions = [];

  constructor(protected route: ActivatedRoute,
              protected productRepositoryService: ProductRepositoryService) {
    this.subscriptions.push(
    this.route.params.subscribe(param =>{
      let productId = param["productId"];
        this.product = this.productRepositoryService.findById(productId);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription :Subscription)=>{
      subscription.unsubscribe();
    })
  }
}


