import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {PostService} from "../post.service";
import {Ad} from "../ad";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css']
})
export class EachPostComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id;
  post: Ad;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.subscription = route.params.subscribe(
      (params) =>  this.id = params['id']
    );
    this.post = this.postService.getPosts()[this.id];
  }
  addToCart(id){
    this.post.inCart = true;
    this.postService.onAddToCart(id);
  }
  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = this.post.company + ' ' + this.post.model;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
