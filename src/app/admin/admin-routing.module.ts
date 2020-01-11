import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ProductcreationComponent} from "./productcreation/productcreation.component";
import {NgModule} from "@angular/core";

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'new-product', component: ProductcreationComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {
}

export const adminRoutedComponents = [AdminComponent, ProductcreationComponent];


