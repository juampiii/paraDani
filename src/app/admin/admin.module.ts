import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adminRoutedComponents, AdminRoutingModule} from "./admin-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    adminRoutedComponents
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
