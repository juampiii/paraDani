import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'productos/:productId',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routedComponents = [
  HomeComponent,
  ProductsComponent
]
