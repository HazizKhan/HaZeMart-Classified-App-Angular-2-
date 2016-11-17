import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NewMobileComponent } from './new-mobile/new-mobile.component';
import { AllMobilesComponent } from './all-mobiles/all-mobiles.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import {PostService} from "./post.service";
import { CartComponent } from './cart/cart.component';
import { EachPostComponent } from './each-post/each-post.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostContainerComponent,
    NewCarComponent,
    NewMobileComponent,
    AllMobilesComponent,
    AllCarsComponent,
    CartComponent,
    EachPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
