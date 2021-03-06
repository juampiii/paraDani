import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routedComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ProductboxComponent} from "./shared/productbox/productbox.component";
import {ShoppingCartService} from "./shared/shoppingcart/shoppingcart.service";
import {ShoppingCartComponent} from "./shared/shoppingcart/shoppingcart.component";
import {ProductRepositoryService} from "./productRepository/productrepository.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { CheckoutComponent } from './checkout/checkout.component';
import {CustomerService} from "./shared/customer/customer.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductcreationComponent } from './admin/productcreation/productcreation.component';
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductboxComponent,
    ShoppingCartComponent,
    routedComponents,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    ShoppingCartService,
    ProductRepositoryService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
