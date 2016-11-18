import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Ad} from "../ad";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
posts: Ad[];
  constructor(private service: PostService) {
    this.posts = this.service.getCart();
  }
  deleteFromCart(id){
    this.posts[id].inCart = false;
    this.service.onDeleteFromCart(id);
  }
  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Your Cart";

  }

}
