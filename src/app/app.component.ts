import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject, OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ShoppingCartService} from "./shared/shoppingcart/shoppingcart.service";
import {ShoppingCartComponent} from "./shared/shoppingcart/shoppingcart.component";
import {CustomerService} from "./shared/customer/customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  public constructor(protected shoppingCartService: ShoppingCartService,
                     protected renderer: Renderer2,
                     protected customerService: CustomerService) {
  }


  @ViewChild("shoppingcart", {static: false})
  shoppingCartComponent: ShoppingCartComponent;

  @ViewChild("shoppingcartcontainer", {static: false})
  shoppingCartContainer: ElementRef;

  public showShoppingCartContentFromParent() {
    this.shoppingCartComponent.showShoppingCartDetails();

  }


  title = 'Tu Mascota';
  customer = {}

  ngOnInit(): void {
    console.log("Init")
  }

  ngAfterViewInit(): void {
    console.log("View Init")
    this.renderer.addClass(this.shoppingCartContainer.nativeElement, "red-background")
  }

  ngOnDestroy(): void {
    console.log("Destroyed")
  }
}
