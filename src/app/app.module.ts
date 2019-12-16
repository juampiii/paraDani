import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import {FormsModule} from '@angular/forms';
import {ProductboxComponent} from "./shared/productbox/productbox.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
