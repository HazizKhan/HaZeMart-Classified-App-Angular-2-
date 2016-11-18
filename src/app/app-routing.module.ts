/**
 * Created by hazizkhan on 11/17/2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostContainerComponent} from "./post-container/post-container.component";
import {AllMobilesComponent} from "./all-mobiles/all-mobiles.component";
import {AllCarsComponent} from "./all-cars/all-cars.component";
import {NewCarComponent} from "./new-car/new-car.component";
import {NewMobileComponent} from "./new-mobile/new-mobile.component";
import {CartComponent} from "./cart/cart.component";
import {EachPostComponent} from "./each-post/each-post.component";




const appRoutes: Routes = [
  {path: 'post/:id', component: EachPostComponent},
  { path: '', component:  PostContainerComponent},
  {path: 'post', component : PostContainerComponent},
  { path: 'mobiles', component:  AllMobilesComponent},
  {path: 'cars', component: AllCarsComponent},
  {path: 'add/car', component: NewCarComponent},
  {path: 'add/mobile', component : NewMobileComponent},
  {path: 'cart', component : CartComponent},
  {path:'**', component: PostContainerComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
