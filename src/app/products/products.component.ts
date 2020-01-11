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
      this.productRepositoryService.findById(productId).subscribe(product =>{
        this.product = product;
      })

    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription :Subscription)=>{
      subscription.unsubscribe();
    })
  }
}


